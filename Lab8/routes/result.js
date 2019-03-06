const express = require("express");
const router = express.Router();

router.post("/",async (req, res) => {
	if (req.body['text-to-test']) {
		const isPalindrome = palindrome(req.body['text-to-test']);
		let c = "";
		if(isPalindrome == true){c = "success";}
		else {c = "failure";}
		let data = {
			title: "The Palindrome Results!",
			text: req.body['text-to-test'],
			isPalindrome: isPalindrome,
			class: c
		};
		res.render("result", data);
	} else {
		let data = {
			title: "Error: 400",
			description: "Text must be entered."
		}
		res.status(400).render("error", data);
	}
});

router.get("/", async(req, res) => {
	let data = {
		title: "Error: 400",
		description: "Text must be entered."
	}
	res.status(400).render("error", data);
});

function palindrome(text) {
    let lowerText = text.toLowerCase();
    for(let i = 0; i < lowerText.length; i++){
        if(!(/^[a-z0-9]/.test(lowerText[i]))){
            lowerText = lowerText.slice(0,i) + lowerText.slice(i + 1);
            i--;
        }
    }
	for (let x = 0, y = lowerText.length - 1; x < y; x++, y--) {
		if (lowerText[x] != lowerText[y])
			return false;
	}
	return true;
}

module.exports = router;