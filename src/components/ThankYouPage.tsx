function ThankYouPage() {
  return (
    <div className="w-[90%] h-8/12 relative overflow-x-hidden xl:w-300 z-10 flex flex-col items-center justify-center gap-10">
      <img
        src="sent.png"
        alt=""
        className="w-30 sm:w-40 md:w-50 lg:w-60 xl:w-70"
      />

      <p className="text-2xl font-semibold">
        Thank you for completing our survey! Your feedback is valuable and will
        help us improve.
      </p>
    </div>
  );
}

export default ThankYouPage;
