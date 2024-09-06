from openai import OpenAI
client = OpenAI()

joke = input("Enter a word or phrase:\n\t")

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a funny dad"},
        {
            "role": "user",
            "content": f"Write a dad joke using this: {joke}"
        }
    ]
)

print("-------- Message Below ---------\n")
print(completion.choices[0].message.content)