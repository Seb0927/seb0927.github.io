function Form() {
  // Component variables
  const formActionUrl = `https://formsubmit.co/${import.meta.env.VITE_FORM_EMAIL}`;
  // The line above is not safe since the value is still being saved on the client side.
  // You should use a server from where you can fetch the value and use it in the form.
  // I hope to change that on the future

  return (
    <form className="w-full" action={formActionUrl} method="POST">
      <div className="flex flex-wrap lg:-ml-3 mb-6">
        <div className="w-full lg:w-1/4 lg:px-3 lg:mb-0">
          <label className="block text-sm italic mb-1" htmlFor="name">
            Name:
          </label>
          <input className="appearance-none block w-full bg-[#9ED5AD] text-black rounded py-3 px-4 mb-3 focus:outline-none focus:bg-[#AFEDC2]" id="name" type="text" name="name"/>
        </div>
        <div className="w-full lg:w-3/4 lg:px-3 lg:mb-3">
          <label className="block text-sm italic mb-1" htmlFor="email">
            Email:
          </label>
          <input className="appearance-none block w-full bg-[#9ED5AD] text-black rounded py-3 px-4 mb-3 focus:outline-none focus:bg-[#AFEDC2]" id="email" type="text" name="email"/>
        </div>
        <div className="w-full lg:px-3">
          <label className="block text-sm italic mb-1" htmlFor="message">
            Message:
          </label>
          <textarea className="h-36 min-h-12 max-h-56 appearance-none block w-full bg-[#9ED5AD] text-black rounded py-3 px-4 mb-6 focus:outline-none focus:bg-[#AFEDC2]" id="message" type="text" name="message"/>
        </div>
        <div className="w-full flex justify-center mx-3">
          <button type="submit"
            className="appearance-none block bg-[#9ED5AD] text-black font-bold rounded-full py-2 px-12  hover:bg-[#AFEDC2]">
            Send
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form