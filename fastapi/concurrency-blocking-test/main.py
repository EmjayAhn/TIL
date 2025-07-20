import time
import asyncio
from fastapi import FastAPI

app = FastAPI()


# request를 동기적으로 처리
# coroutine으로 정의 : async def, 하지만 non-blocking I/O operation을 포함하고 있지 않으므로,
# 모든 process는 sequential 하게 처리됨
@app.get("/1")
async def endpoint_1():
    print("Now is endpoint_1")
    time.sleep(
        5
    )  # Blocking I/O operation -> cannot be awaited, event loop를 blocking 시킴
    # Function execution 은 paused 될 수 없음, event loop은 기다리는 동안 차단됨
    print("Bye Bye")


# request를 비동기적으로 처리
# coroutine으로 정의 : async def, 하지만 non-blocking I/O operation을 포함하고 있으므로,
# 모든 process는 concurrently 하게 처리 됨
@app.get("/2")
async def endpoint_2():
    print("Now is endpoint_2")
    await asyncio.sleep(5)  # non-blocking I/O operation -> awaited 이 가능
    # Function 자체는 paused 되지만, 그 동안 non-blocking 이므로 다른 process(request)를 처리 가능
    print("Bye Bye")


# request를 parallel하게 처리
@app.get("/3")
def endpoint_3():
    print("Now is endpoint_3")
    time.sleep(5)
    print("Bye Bye")


# 왜 3 엔드포인트는 parallel 햐게 처리되는가?
# uvicorn 실행 -> Main Thread 생성
# Coroutine (asnyc def)는 Event Loop 에 등록되고, 실행됨
# 3번은 main thread 에서 하나, 별도의 다른 thread에서 처리 되기 때문에 병렬로 처리됨

"""
BEST PRACTICES
1. Use async def for endpoint with non-blocking I/O operations - DB query, external api requests
2. Don't use async def for endpoint with blocking I/O operations
3. Use normal function for endpoints with blocking I/O operations - some DB client library (no await feature)
"""
