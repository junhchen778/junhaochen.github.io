let intro = document.querySelector('.intro');
let intro_video = document.querySelector('#intro_DNA');

// ---------- Splash Screen ---------- //
intro_video.onended = function() {
    intro.style.top = '-100vh';
};

// ---------- Scroll Animation ---------- //
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animate-up, .animate-left, .animate-right');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5 // Trigger when half of the element is in view
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

// ---------- Main Video Player ---------- //
document.addEventListener('DOMContentLoaded', function() {

    var mainVideo = document.getElementById('mainVideo');
    // Check if the browser supports the feature
    if ('mediaSession' in navigator) {
        // Request permission to play the video
        navigator.mediaSession.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                // The user has granted permission, so start playing the video
                mainVideo.play();
            } else {
                // The user has denied permission or the feature is not supported
                console.log('Autoplay permission was not granted');
            }
        });
    } else {
        // The feature is not supported
        console.log('Media Session API is not supported');
    }
});

function videoUrl(hmmmmmm){
    document.getElementById('slider').src = hmmmmmm ;
};

// ---------- Header Links ---------- //
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    // Check if the href attribute starts with '#' indicating an internal link
    if (href.startsWith('#')) {
      event.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } // External links will function normally without calling preventDefault()
  });
});

// ---------- Video Popup ---------- //
function openPopup() {
    var popup = document.getElementById('popup');
    var video = document.getElementById('mainVideo');
    popup.style.display = 'block';
    video.style.display = 'block';
    var popupVideo = document.querySelector('#popup video');
    popupVideo.src = "assets/Sample Website opener.mp4";
    popupVideo.load();
    popupVideo.play();
    // Stop propagation on the popup video to avoid closing the popup when video is clicked
    popupVideo.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

function closePopup() {
    var popup = document.getElementById('popup');
    var video = document.getElementById('mainVideo');
    popup.style.display = 'none';
    video.style.display = 'block';
    var popupVideo = document.querySelector('#popup video');
    popupVideo.src = "assets/Sample Website opener.mp4";
    popupVideo.stop();
    // Stop propagation on the popup video to avoid closing the popup when video is clicked
    popupVideo.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

function ProcessopenPopup() {
    var popup = document.getElementById('process_popup');
    var video = document.getElementById('process_video');
    popup.style.display = 'block';
    video.style.display = 'block';
    var popupVideo = document.querySelector('#process_popup video');
    popupVideo.src = "assets/Sample Website opener.mp4";
    popupVideo.load();
    popupVideo.play();
    // Stop propagation on the popup video to avoid closing the popup when video is clicked
    popupVideo.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

function ProcessclosePopup() {
    var popup = document.getElementById('process_popup');
    var video = document.getElementById('process_video');
    popup.style.display = 'none';
    video.style.display = 'block';
    var popupVideo = document.querySelector('#process_popup video');
    popupVideo.src = "assets/Sample Website opener.mp4";
    popupVideo.stop();
    // Stop propagation on the popup video to avoid closing the popup when video is clicked
    popupVideo.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

// ---------- Underline Animation ---------- //
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('#title_header');
    setTimeout(() => {
        header.classList.add('animate-underline');
    }, 2400);  // Adds the class after 2.4 seconds
});

// ---------- Check out our portfolio button ---------- //
document.getElementById('portfolio_button').addEventListener('click', function() {
    window.location.href = 'portfolio_corporate.html'; 
});

// ---------- FAQ ---------- //
function toggleAccordion(element) {
    var content = element.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.paddingTop = null;
        content.style.paddingBottom = null;
    } else {
        // Close other open items
        var openItems = document.querySelectorAll('.accordion-content');
        for (var i = 0; i < openItems.length; i++) {
            openItems[i].style.maxHeight = null;
            openItems[i].style.paddingTop = null;
            openItems[i].style.paddingBottom = null;
        }
        // Open the selected item by setting max-height large enough to accommodate the content
        content.style.maxHeight = content.scrollHeight + "vw";
        content.style.paddingTop = "1vw";  // Add padding during expansion for smooth effect
        content.style.paddingBottom = "1vw";
    }
};

// ---------- Info Popup ---------- //
document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('infoPopup');
    popup.style.display = 'block'; // Show the popup
    setTimeout(function() {
        popup.style.display = 'none'; // Hide the popup after 6 seconds
    }, 10000); // 6000 milliseconds = 6 seconds
});

// ---------- Toggle ---------- //
document.getElementById('dynamicToggle').addEventListener('change', function() {
    document.body.classList.toggle('creative');

    var logo = document.getElementById('dna_logo');
    var logo_footer = document.getElementById('dna_logo_footer');
    var portfolio = document.getElementById('portfolio');
    var portfolio_button = document.getElementById('portfolio_button');
    var video_production_card = document.getElementById('video_production_card');
    var digital_ad_card = document.getElementById('digital_ad_card');
    var content_calendar_strategy_card = document.getElementById('content_calendar_strategy_card');
    var video_card_back = document.getElementById('video_card_back');
  

    if (this.checked) {
        logo.src = 'assets/DNA Creative White.png';  
        portfolio.href = 'portfolio_creative.html';
        portfolio_button.href = 'portfolio_creative.html';
        title_header_main.textContent = 'Crafting stories';
        title_header.textContent = ' & Captivating Audiences';
        sub_header_2.innerHTML = 'The creative space has its tiers, with our team <br> and experience, we are indisputably at the peak.';
        video_production_card.innerHTML = 'Unleash your creativity with stunning, story-driven video production services';
        digital_ad_card.innerHTML = 'Perfect for brands venturing into B2B video advertising for the first time';
        content_calendar_strategy_card.innerHTML = 'Optimize your content calendar to amplify creativity & brand impact';
        logo_footer.src = 'assets/DNA Creative White.png';  
        video_card_back.innerHTML = `
            <ul>
                <li>Documentaries</li>
                <li>Commercials</li>
                <li>Sporting Events</li>
                <li>Fashion Shows</li>
                <li>Social Events</li>
                <li>Brand Campaigns</li>
            </ul>
        `;
    } else {
        logo.src = 'assets/DNA Corporate.png';   
        portfolio.href = 'portfolio_corporate.html';
        portfolio_button.href = 'portfolio_corporate.html';
        title_header_main.textContent = 'B2B Brilliance Elevating';
        title_header.textContent = 'Your Visual Presence';
        sub_header_2.innerHTML = 'Revitalize your corporate image. <br> In other words, lets make corporate cool again.';
        video_production_card.innerHTML = 'Elevate your corporate image with professional video production solutions';
        digital_ad_card.innerHTML = 'Ideal for companies venturing into B2B video advertising';
        content_calendar_strategy_card.innerHTML = 'Master your content calendar with strategic planning';
        logo_footer.src = 'assets/DNA Corporate.png';  
        video_card_back.innerHTML = `
            <ul>
                <li>Onboarding Videos</li>
                <li>Testimonial Videos</li>
                <li>Recruitment Videos</li>
                <li>Product Videos</li>
                <li>Training Videos</li>
                <li>Promotional Videos</li>
                <li>Leadership Videos</li>
                <li>FAQ Videos</li>
            </ul>
        `;
    }
});

window.onpageshow = function() {
    var dynamicToggle = document.getElementById('dynamicToggle');
    dynamicToggle.checked = false; // Ensure the toggle is unchecked
    applyDefaultState(); // Apply the default state based on the unchecked toggle
};

// ----------  ---------- //