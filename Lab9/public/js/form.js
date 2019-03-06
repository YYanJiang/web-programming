
(function() {
    const palindromeMethods = {
        isPalindrome(text) {
            if (!text) throw "Text must be entered."
            if (typeof(text)!= "string") throw "Must provide a string.";
            let lowerText = text.toLowerCase();
            for(let i = 0; i < lowerText.length; i++){
                if(!(/^[a-z0-9]/.test(lowerText[i]))){
                    lowerText = lowerText.slice(0,i) + lowerText.slice(i + 1);
                    console.log(lowerText);
                    i--;
                }
            }
            for (let x = 0, y = lowerText.length - 1; x < y; x++, y--) {
                if (lowerText[x] != lowerText[y])
                return "not-palindrome";
        }
        return "is-palindrome";
        }
    };
  
  
    const staticForm = document.getElementById("static-form");
  
    if (staticForm) {

      const textElement = document.getElementById("textarea");
  
      const errorContainer = document.getElementById("error-container");
      const errorTextElement = errorContainer.getElementsByClassName(
        "text-goes-here"
      )[0];
  
      const resultContainer = document.getElementById("result-container");
      const resultTextElement = resultContainer.getElementsByClassName(
        "text-goes-here"
      )[0];

      const isPalindrome = document.getElementsByClassName("is-palindrome")[0];
      const notPalindrome = document.getElementsByClassName("not-palindrome")[0];

      staticForm.addEventListener("submit", event => {
        event.preventDefault();
  
        try {
          errorContainer.classList.add("hidden");
          resultContainer.classList.add("is-palindrome");
  
          const textValue = textElement.value;

          var result = palindromeMethods["isPalindrome"](textValue);

          resultTextElement.textContent = textValue + ", " + result;
          resultContainer.classList.remove("hidden");

          let orderList = document.createElement("li");
          orderList.appendChild(document.createTextNode(textValue));

          if(result == "is-palindrome"){
              isPalindrome.appendChild(orderList);
          }
          else {
              notPalindrome.appendChild(orderList);
          }

        } catch (e) {
          const message = typeof e === "string" ? e : e.message;
          errorTextElement.textContent = e;
          errorContainer.classList.remove("hidden");
        }
      });
    }
  })();