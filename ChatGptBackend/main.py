from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

import OpenAiApi
from MessageBlock import MessageBlock

"""
@author Michael Banck michael.banck@uni-wuerzburg.de ©
"""

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
async def chat_bot(messages: MessageBlock):

    result = OpenAiApi.request(messages)

    result.choices[0].message.content

    return {"result": result.choices[0].message.content}



