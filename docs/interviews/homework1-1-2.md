# 作业：1-1，手写Promise源码

```js
/**
 * 四, 手写实现MyPromise源码
 * 要求: 尽可能还原Promise中的每一个API, 并通过注释的方式描述思路和原理
 */

/**
 * 1. Promise是一个类
 * 2. new这个Promise的时候会传递一个执行器executor, 执行器会立即执行
 * 3. 执行器executor, 有两个参数,分别为resolve和reject
 * 4. Promise中有三种状态: pending(等待), fulfilled(成功), rejected(失败)
 * 5. 状态的转变只有两种方式: pending -> fulfilled; pending -> rejected
 * 6. 一旦状态变为成功或者失败, 将不会再次改变
 * 7. resolve和reject用来更改状态,
 *    resolve将状态从pending转变为fulfilled,
 *    rejected将状态从pending转变为rejected.
 * 8. then方法内部做的事情就是判断状态;
 *    如果是成功状态, 调用成功的回调函数;
 *    如果是失败状态, 调用失败的回调函数;
 *    then方法是属于原型上的函数, 每个promise容器都可以调用then方法
 * 9. then的成功回调函数有一个参数, 表示成功之后的值; 在调用resolve时传递;
 *    then的失败回调函数有一个参数, 表示失败的原因; 在调用reject时传递;
 * 10. 每个promise都有各自的成功值和失败原因, 因而成功值和失败原因是实例属性
 * 11. then方法里需要考虑pending状态下的情况, 即promise容器中的异步任务还未执行完毕
 * 12. then方法是可以多次被调用的, 多次调用后会传入多个处理函数, 在异步任务执行完毕后,都会被执行
 * 13. then方法是可以被链式调用的,所以每个then方法应该返回一个Promise对象
 * 14. then方法是可以把值传递给下一个then方法的
 * 15. then方法不能返回自身的promise对象, 避免无限循环调用. 需要识别出来并报错
 * 16. then方法需要对回调函数的错误情况进行处理
 * 17. then方法的参数是可选的, 如果没有参数的时候, 直接传递上一层的值
 * 18. Promise.all是一个静态方法, 解决并发问题;
 * 19. all方法的参数是一个数组, 数组的值可以是普通值也可以是promise对象,
 * 20. all方法返回一个promise对象, 传递的值是一个数组,与参数数组的顺序保持一致,是参数中数组执行的结果
 * 21. all方法当且仅当参数数组中所有的promise均成功时,才返回一个成功状态的promise对象, 否则返回失败状态的promise对象
 * 22. Promise.resolve方法是一个静态方法,返回一个promise对象,状态由promise执行后的结果决定;
 * 23. finally方法是无论之前promise链的状态如何,一定会执行, 是一个类方法;
 * 24. finally方法返回的也是一个promise对象
 * 25. catch方法是一个类方法, 用于处理失败情况, 是then(undefined,()=>{})的别名
 * 26. Promise.reject方法是一个静态方法, 返回一个失败的promise对象
 * 27. Promise.race方法是一个静态方法, 类似all方法, 只不过仅有一个成功,就可以返回一个成功的promise
 * 28. Promise.any类似于race, 只不过遇到失败的不必改变状态, 直到所有的失败,才会失败.有一个成功, 就成功.
 *
 */

 /**
	* 有待优化的地方:
	* 1. Promise.race和Promise.any, 当状态变为成功后, 应该阻止后续异步任务,不必浪费时间.
	*/

// 定义为常量, 有三个目的: 复用, 避免出错, 良好的提示
const PENDING = 'pending' // 等待状态
const FULFILLED = 'fulfilled' // 成功状态
const REJECTED = 'rejected' // 失败状态

function resolvePromise(promise2, x, resolve, reject) {
	// 代表返回了自身, 传递类型错误, 避免循环调用
	if (promise2 === x) {
		return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
	}
	if (x instanceof MyPromise) {
		// x 是一个Promise 对象
		// 在promise状态改变后, 传递值
		x.then(resolve, reject)
	} else {
		// x 是一个普通值
		resolve(x)
	}
}
// Promise是一个类, 所以使用class来实现
class MyPromise {
	// new初始化的时候传递一个执行器进去
	constructor(executor) {
		try {
			// 该执行器会立即调用, 并且接收两个参数, 分别为resolve和reject
			executor(this.resolve, this.reject)
		} catch (error) {
			// 当执行器出错时, 使用reject函数处理
			this.reject(error)
		}
	}

	// promise 状态, 初始化为pending状态
	status = PENDING

	// 成功之后的值, 默认为undefined
	value = undefined

	// 失败之后的原因, 默认为undefined
	reason = undefined

	// 暂存的成功回调函数, 数组可以存储多个注册的回调函数
	successCallback = []

	// 暂存的失败回调函数, 数组可以存储多个注册的回调函数
	failCallback = []

	// 使用箭头函数固定this指向为声明时候的上下文环境;
	// resolve的作用是更改状态,从pending转变为fulfilled
	resolve = value => {
		// 只有Promise的状态是pending,才可以进行更改状态的操作
		if (this.status === PENDING) {
			// 将状态更改为成功
			this.status = FULFILLED

			// 保存成功之后的值, 方便在之后的then方法中使用
			this.value = value

			// 更改为成功状态后, 依次遍历之前暂存的成功回调函数,并执行
			this.successCallback.forEach(cb => cb())
		}
	}

	reject = reason => {
		// 只有Promise的状态是pending,才可以进行更改状态的操作
		if (this.status === PENDING) {
			// 将状态更改为失败
			this.status = REJECTED

			// 保存失败之后的原因, 方便在之后的then方法中使用
			this.reason = reason

			// 更改为失败状态后, 依次遍历之前暂存的失败回调函数,并执行
			this.failCallback.forEach(cb => cb())
		}
	}

	then(successCallback, failCallback) {
		// 当回调函数不存在或者不是函数的时候, 直接传递值给下一层
		successCallback = typeof successCallback === 'function' ? successCallback : value => value
		failCallback =
			typeof failCallback === 'function'
				? failCallback
				: reason => {
						throw reason
				  }

		const promise2 = new MyPromise((resolve, reject) => {
			// 首先判断状态
			if (this.status === FULFILLED) {
				// 异步执行, 获取promise2
				setTimeout(() => {
					try {
						// 返回,成功回调的返回值
						const x = successCallback(this.value)
						// 判断x是普通值, 还是一个promise对象
						// 如果x是普通值, 直接调用resolve
						// 如果x是一个promise对象, 进一步查看promise对象的返回结果
						// 根据promise对象的返回结果, 决定进一步调用resolve还是reject
						resolvePromise(promise2, x, resolve, reject)
					} catch (error) {
						// 当成功回调函数有出错时, 需要传递错误信息给下一个promise
						reject(error)
					}
				}, 0)
			} else if (this.status === REJECTED) {
				// 异步执行, 获取promise2
				setTimeout(() => {
					try {
						// 返回,失败回调的返回值
						const x = failCallback(this.reason)
						// 判断x是普通值, 还是一个promise对象
						// 如果x是普通值, 直接调用resolve
						// 如果x是一个promise对象, 进一步查看promise对象的返回结果
						// 根据promise对象的返回结果, 决定进一步调用resolve还是reject
						resolvePromise(promise2, x, resolve, reject)
					} catch (error) {
						// 当成功回调函数有出错时, 需要传递错误信息给下一个promise
						reject(error)
					}
				}, 0)
			} else {
				// 当前的状态为pending状态, 代表promise容器中的异步任务还未执行完
				// 暂存成功与失败的回调函数, 待状态明确后再遍历调用
				this.successCallback.push(() => {
					setTimeout(() => {
						try {
							// 返回,失败回调的返回值
							const x = successCallback(this.value)
							// 判断x是普通值, 还是一个promise对象
							// 如果x是普通值, 直接调用resolve
							// 如果x是一个promise对象, 进一步查看promise对象的返回结果
							// 根据promise对象的返回结果, 决定进一步调用resolve还是reject
							resolvePromise(promise2, x, resolve, reject)
						} catch (error) {
							// 当成功回调函数有出错时, 需要传递错误信息给下一个promise
							reject(error)
						}
					}, 0)
				})
				this.failCallback.push(() => {
					setTimeout(() => {
						try {
							// 返回,失败回调的返回值
							const x = failCallback(this.reason)
							// 判断x是普通值, 还是一个promise对象
							// 如果x是普通值, 直接调用resolve
							// 如果x是一个promise对象, 进一步查看promise对象的返回结果
							// 根据promise对象的返回结果, 决定进一步调用resolve还是reject
							resolvePromise(promise2, x, resolve, reject)
						} catch (error) {
							// 当失败回调函数有出错时, 需要传递错误信息给下一个promise
							reject(error)
						}
					}, 0)
				})
			}
		})

		// 通过返回promise对象, 实现then方法的链式调用
		return promise2
	}

	catch(failCallback) {
		return this.then(undefined, failCallback)
	}

	finally(callback) {
		// 通过执行then方法拿到promise状态, 并在then的成功回调和失败回调中都执行callback
		// 返回的是一个promise对象
		// 传递成功值和失败原因到下一个then方法中
		// 通过MyPromise.resolve方法转换为promise对象,来处理callback返回值为promie对象时的状况
		return this.then(
			value => MyPromise.resolve(callback()).then(() => value),
			reason =>
				MyPromise.resolve(callback()).then(() => {
					throw reason
				})
		)
	}

	static all(array = []) {
		const results = []
		let index = 0 // 标识完成的操作数量
		return new MyPromise((resolve, reject) => {
			// 定义一个方法addData, 用于将对应的执行结果保存在对应的位置
			const addData = (key, value) => {
				results[key] = value
				index++
				// 添加后, 判断下是否结束完所有的异步操作, 如果完成,则传递结果数组
				if (index === array.length) {
					// 循环执行结束后,传递结果数组
					resolve(results)
				}
			}
			// 如果参数长度为0，则直接同步返回一个 resolved 状态的 promise
			if (!array.length) {
				resolve(results)
				return
			}
			// 循环遍历all的参数, 并分别判断是什么类型的值, 将执行的结果存入结果数组中
			array.forEach((current, index) => {
				if (current instanceof MyPromise) {
					// promise对象
					current.then(
						value => addData(index, value),
						reason => reject(reason)
					)
				} else {
					// 普通值
					addData(index, current)
				}
			})
		})
	}

	static race(array) {
		return new MyPromise((resolve, reject) => {
			// 如果参数长度为0，则返回一个永远等待状态的 promise
			if (!array.length) {
				return
			}

			// 遍历包装所有值为promise对象,方便统一处理
			// 当某一个promise对象执行完毕后立即调用回调函数,改变整个返回promise的状态
			array.forEach(current => {
				MyPromise.resolve(current).then(resolve, reject)
			})
		})
	}

	static any(array) {
		let index = 0 // 标识完成的操作数量
		return new MyPromise((resolve, reject) => {
			// 如果参数长度为0，则返回一个成功状态的 promise
			if (!array.length) {
				return resolve()
			}

			const changeIndex = () => {
				index++
				// 添加后, 判断下是否结束完所有的异步操作, 如果完成,则传递失败结果
				if (index === array.length) {
					// 循环执行结束后,表示所有结果均失败, 传递失败原因, 暂且先传递一个普通错误对象
					reject(new Error('AggregateError'))
				}
			}

			// 遍历包装所有值为promise对象,方便统一处理
			// 当某一个promise对象执行完毕并且成功后立即调用成功回调函数.
			// 当遍历执行完毕后, 如果没有成功的, 则改变状态为失败
			array.forEach(current => {
				MyPromise.resolve(current).then(resolve, () => changeIndex())
			})
		})
	}

	static resolve(value) {
		return new MyPromise((resolve, reject) => {
			if (value instanceof MyPromise) {
				// 如果是promise对象,直接返回对应的处理状态
				return value.then(resolve, reject)
			} else {
				// 如果不是,直接传递结果
				resolve(value)
			}
		})
		
	}

	static reject(err) {
		return new MyPromise((resolve, reject) => {
			reject(err)
		})
	}
}

/********* 测试用例 **************/
/* function other() {
	return new MyPromise((resolve, reject) => {
		resolve('other')
	})
}

const promise = new MyPromise((resolve, reject) => {
	// throw new Error('excutor error')
	// resolve('成功')
	reject('失败')
	// setTimeout(() => {
	// 	resolve('成功')
	// 	// reject('失败')
	// }, 2000)
}) */

/* promise
	.then()
	.then()
	.then(
		value => {
			console.log(value)
			// throw new Error('then excutor error')
			return '1111'
		},
		reason => {
			console.log(reason)
			return 10000
		}
	)
	.then(
		value => {
			console.log(value)
		},
		reason => {
			console.log('object')
			console.log(reason.message)
		}
	) */

const p1 = () =>
	new MyPromise(resolve => {
		setTimeout(() => {
			resolve('p1')
		}, 2000)
	})

const p2 = () =>
	new MyPromise((resolve, reject) => {
		// resolve('p2')
		reject('p2, error')
	})

// MyPromise.all(['a', 'b', p1(), p2(), 'c']).then(value => console.log(value))

// MyPromise.resolve(10).then(value => console.log(value))
// MyPromise.resolve(p1()).then(value => console.log(value))

/* p2()
	.finally(() => {
		console.log('finally')
		return p1()
	})
	.then(
		value => {
			console.log(value)
		},
		reason => {
			console.log(reason)
		}
	)
 */

//  p2().then(value => console.log(value)).catch(reason => console.log(reason))

// MyPromise.race(['p1']).then(value => console.log(value))
MyPromise.any([p1(), p2()]).then(value => console.log(value)).catch(reason => console.log(reason))
```