function Form() {
  return (
    <form className="w-full">
      <div className="flex flex-wrap lg:-ml-3 mb-6">
        <div className="w-full lg:w-1/4 lg:px-3 lg:mb-0">
          <label className="block text-sm italic mb-1" for="name">
            Name:
          </label>
          <input class="appearance-none block w-full bg-[#9ED5AD] text-black rounded py-3 px-4 mb-3 focus:outline-none focus:bg-[#AFEDC2]" id="name" type="text" />
        </div>
        <div class="w-full lg:w-3/4 lg:px-3 lg:mb-3">
          <label class="block text-sm italic mb-1" for="email">
            Email:
          </label>
          <input class="appearance-none block w-full bg-[#9ED5AD] text-black rounded py-3 px-4 mb-3 focus:outline-none focus:bg-[#AFEDC2]" id="email" type="text" />
        </div>
        <div class="w-full lg:px-3">
          <label class="block text-sm italic mb-1" for="message">
            Message:
          </label>
          <textarea class="h-36 min-h-12 max-h-56 appearance-none block w-full bg-[#9ED5AD] text-black rounded py-3 px-4 mb-6 focus:outline-none focus:bg-[#AFEDC2]" id="message" type="text" />
        </div>
        <div className="w-full flex justify-center mx-3">
          <button onClick={() => alert("Message sent!")} type="button"
            className="appearance-none block bg-[#9ED5AD] text-black font-bold rounded-full py-2 px-12  hover:bg-[#AFEDC2]">
            Send
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form