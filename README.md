1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Ans: getElementById:
      a) getElementById is the return by unique element.
   Ans: getElementsByClassName:
      a) getElementsByClassName return the multiple elements.
   Ans: querySelector:
      a) querySelector return the first child.
   Ans: querySelectorAll:
      a) querySelectorAll is static. it return the nodeList.
2. How do you create and insert a new element into the DOM?
   step1:
     let headingOne = document.createElement('h1');
   step2:
     headingOne.innerText = "This is Heading One";
   step3:
     document.body.appendChild(headingOne);
3. What is Event Bubbling? And how does it work?
   Ans: Event Bubbling is event which down element from the up element(parent Node).
     left to right: document-html-body-event
     right to left: event-body-html-document
4. What is Event Delegation in JavaScript? Why is it useful?
   Ans: Event Delegation means giving an event to the parent instead of giving an event to the child element.
   1. Performance is good.
   2. dynamically it works.
   3. code length short.
5. What is the difference between preventDefault() and stopPropagation() methods?
   PreventDefault:
   1. stop default browser behavior.
   2. form not submitted.
   StopPropagation:
   1. stop Event bubbling.
   2. Not send event of the Parent node.  
