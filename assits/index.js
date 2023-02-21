/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
    'use strict'
  
    const storedTheme = localStorage.getItem('theme')
  
    const getPreferredTheme = () => {
      if (storedTheme) {
        return storedTheme
      }
  
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = function (theme) {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = theme => {
      const activeThemeIcon = document.querySelector('.theme-icon-active use')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
      })
  
      btnToActive.classList.add('active')
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme !== 'light' || storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())
  
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            localStorage.setItem('theme', theme)
            setTheme(theme)
            showActiveTheme(theme)
          })
        })
    })
  })()

  
  $(document).ready(() => {

		function checkVisability() {
			var elm = $('section');

			elm.each(function () {
				if ($(this).inView("topOnly", 50)) {
					$(this).addClass("visible");
				}
			});
		}

		checkVisability();

		$(window).scroll(() => {
			console.log('scroll');
			checkVisability();
		});

    if ($("#myModal").length === 0) {
      return;
    }


    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    const modalToggle = document.getElementById('toggleMyModal');

    if (sessionStorage.getItem("Username") === null) {
      myModal.show(modalToggle);
    } else {
      var inputVal = sessionStorage.getItem("Username");
      getInputValue(inputVal);
    }

    const closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener("click", function() {
        // Selecting the input element and get its value 
        var inputVal = document.getElementById("myInput").value;
      getInputValue(inputVal);
    });

    function getInputValue(inputVal ) {


      if (inputVal !== "") {
        myModal.hide(modalToggle);
      }
      
      // Displaying the value

      document.getElementById("p1").innerHTML = inputVal;
      sessionStorage.setItem("Username", inputVal);

    }
	});

  
  
