function left_menu_click() {
          if (document.getElementById("radio_valid_sites").checked) {
              document.getElementById("iframe_valid_sites").style.display = "block";
              document.getElementById("iframe_faq_esia").style.display = "none";
              document.getElementById("iframe_wiki_esia").style.display = "none";
          }
          else if (document.getElementById("radio_faq_esia").checked) {
              document.getElementById("iframe_valid_sites").style.display = "none";
              document.getElementById("iframe_faq_esia").style.display = "block";
              document.getElementById("iframe_wiki_esia").style.display = "none";
          }
          else if (document.getElementById("radio_wiki_esia").checked) {
              document.getElementById("iframe_valid_sites").style.display = "none"
              document.getElementById("iframe_faq_esia").style.display = "none";
              document.getElementById("iframe_wiki_esia").style.display = "block";
          }
        }