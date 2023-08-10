function shareOnFacebook() {
   const urlToShare = "https://fantastic-praline-34322e.netlify.app/";
   const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
     urlToShare
   )}`;
   window.open(facebookUrl, "_blank", "width=600,height=400");
 }

 function shareOnLinkedIn() {
   const urlToShare = "https://fantastic-praline-34322e.netlify.app/";
   const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
     urlToShare
   )}`;
   window.open(linkedInUrl, "_blank", "width=600,height=400");
 }

 function shareOnTwitter() {
   const urlToShare = "https://fantastic-praline-34322e.netlify.app/";
   const textToShare = "Text to be shared on Twitter";
   const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
     urlToShare
   )}&text=${encodeURIComponent(textToShare)}`;
   window.open(twitterUrl, "_blank", "width=600,height=400");
 }

 function shareOnFacebookMessenger() {
   const urlToShare = "https://fantastic-praline-34322e.netlify.app/";
   const facebookMessengerUrl = `fb-messenger://share/?link=${encodeURIComponent(
     urlToShare
   )}`;
   window.open(facebookMessengerUrl, "_blank", "width=600,height=400");
 }

  function shareOnWhatsapp() {
    const urlToShare = "https://fantastic-praline-34322e.netlify.app/";
    const whatsappUrl = `https://api.whatsapp.com/send?text=Your%20encoded%20text%20or%20URL%20to%20share=${encodeURIComponent(
      urlToShare
    )}`;
    window.open(whatsappUrl, "_blank", "width=600,height=400");
  }

