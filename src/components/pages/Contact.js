import React, { forwardRef, useState, useEffect } from "react";
import toast from "react-hot-toast";

const Contact = forwardRef(({ onBackClick }, ref) => {
	const [name, setName] = useState("");
	const [nameError, setNameError] = useState("hidden");
	const [emailError, setEmailError] = useState("hidden");
	const [enquiryError, setEnquiryError] = useState("hidden");
	const [email, setEmail] = useState("");
	const [enquiry, setEnquiry] = useState("");

	const [errorText, setErrorText] = useState("hidden");
	const [buttonStyle, setButtonStyle] = useState(false);

	async function handleSubmit() {
		const toastId = toast.loading("Loading...");
		if (name !== "" && email !== "" && enquiry !== "") {
			const body = '{ "name": "' + name + '", "email": "' + email + '", "enquiry": "' + enquiry + '" }';
			await fetch("https://us-central1-profile-d4a0d.cloudfunctions.net/email", {
				method: "POST",
				body: body,
			})
				.then((data) => {
					console.log(data);
					toast.success("Enquiry sent!", { id: toastId });
				})
				.catch((error) => {
					console.log(error);
					if (error === 500) {
						toast.error("A server error occured, try again later!", { id: toastId });
					} else if (error === 406) {
						toast.error("Client error, please contact me at tobsterclark@gmail.com", { id: toastId });
					} else {
						toast.error("An unknown error occured, please contact me at tobsterclark@gmail.com. Error code: " + error);
					}
				});
		} else {
			toast.error("Must fill out all fields!", { id: toastId });
		}
	}

	useEffect(() => {
		if (nameError === "flex" || emailError === "flex" || enquiryError === "flex") {
			setErrorText("flex");
			setButtonStyle(true);
		} else {
			setErrorText("hidden");
			setButtonStyle(false);
		}
	}, [nameError, enquiryError, emailError]);

	const focusOut = (item) => {
		if (item === "name") {
			if (name === "") {
				setNameError("flex");
			} else {
				setNameError("hidden");
			}
		} else if (item === "email") {
			if (email === "" || email.includes("@") === false || email.includes(".") === false) {
				setEmailError("flex");
			} else {
				setEmailError("hidden");
			}
		} else if (item === "enquiry") {
			if (enquiry === "") {
				setEnquiryError("flex");
			} else {
				setEnquiryError("hidden");
			}
		}
	};

	return (
		<div ref={ref} className="flex flex-col md:flex-row items-center p-10">
			<div className="w-1/2 flex flex-col text-center">
				<span className="font-masthead py-5 text-4xl">Contact Me</span>
				<span>Email: Tobsterclark@gmail.com</span>
				<span>Mobile: +61 481 361 184</span>
				<span>Instagram: @Tobsterclark</span>
			</div>
			<div className="w-1/2 flex flex-col rounded-lg shadow-2xl gap-y-10 items-center py-5">
				<div className="flex justify-center w-full gap-x-20">
					<div className="flex flex-col gap-y-2 w-1/3">
						<span className="flex items-center gap-x-3">
							<span className="py-2">Name</span>
							<span className={"text-red-500 text-xs " + nameError}>This is a required field</span>
						</span>
						<input className="border rounded-lg p-2 focus:bg-blue-300" type="text" onBlur={() => focusOut("name")} placeholder="Bob" onChange={(evt) => setName(evt.target.value)} value={name} />
					</div>
					<div className="flex flex-col gap-y-2 w-1/3">
						<span className="flex items-center gap-x-3">
							<span className="py-2">Email</span>
							<span className={"text-red-500 text-xs " + emailError}>Must be a valid email address</span>
						</span>
						<input className="border rounded-lg p-2 focus:bg-blue-300" onBlur={() => focusOut("email")} placeholder="bob@realemail.com" onChange={(evt) => setEmail(evt.target.value)} value={email} />
					</div>
				</div>

				<div className="flex flex-col gap-y-2 w-2/3">
					<span className="flex items-center gap-x-2">
						Enquiry
						<span className={"text-red-500 text-xs " + enquiryError}>This is a required field</span>
					</span>
					<textarea className="border rounded-lg p-2 focus:bg-blue-300 w-full h-20" onBlur={() => focusOut("enquiry")} type="text" placeholder="What is your enquiry?" onChange={(evt) => setEnquiry(evt.target.value)} value={enquiry} />
				</div>

				<span className={"text-red-500 " + errorText}>Some fields have not been filled out</span>

				<button disabled={buttonStyle} className="btn-primary w-1/5 py-4 " onClick={() => handleSubmit()}>
					Submit
				</button>
			</div>
		</div>
	);
});

export default Contact;
