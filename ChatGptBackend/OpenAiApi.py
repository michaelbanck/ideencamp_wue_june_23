import openai

from MessageBlock import MessageBlock

openai.api_key = "get your own key"

def request(message: MessageBlock):
    """
    @author Michael Banck michael.banck@uni-wuerzburg.de ©
    """
    chat = [{"role": "system", "content": message.systemInfo}]

    for message in message.messages:

        if message.isBot:
            role = "assistant"
        else:
            role = "user"

        entry = {"role": role, "content": message.text}
        chat.append(entry)

    result = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=chat
    )

    return result
