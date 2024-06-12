export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col gap-8 items-center justify-center min-h-screen container p-12 mt-12"
    >
      <h1 className="text-center font-bold text-5xl">
        How do you take your tea? ☕
      </h1>
      <p className="text-base">Feel free to shoot me a message whenever!</p>
      <p className="p-2 border dark:border-tertiary bg-tertiary rounded-xl cursor-pointer text-lg">
        <a href="mailto:alexmelia41@gmail.com">✉️ Get In Touch</a>
      </p>
    </section>
  )
}
