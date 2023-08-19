import Image from "next/image";

export default function ProfesstionalDetails() {
  return (
    <div className=" profile-section flex justify-between items-center p-5 gap-7">
      <span className="flex flex-col justify-start gap-3">
        <h2 className="text-slate-600">Professtional Details</h2>

        <p>This are the professtional details shown to the users in the app.</p>
      </span>
      <Image
        src="/professtional_details.svg"
        width={50}
        height={50}
        alt="professtional-details-image"
      />
    </div>
  );
}
