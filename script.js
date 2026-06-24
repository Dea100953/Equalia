// ===========================
// EQUALIA - MAIN JAVASCRIPT
// ===========================

// Emergency Contacts Database
const emergencyContacts = {
    usa: {
        country: "United States",
        contacts: [
            {
                title: "National Domestic Violence Hotline",
                type: "Domestic Violence Support",
                number: "1-800-799-7233",
                description: "24/7 confidential support for victims of domestic violence",
                link: "https://www.thehotline.org"
            },
            {
                title: "RAINN - National Sexual Assault Hotline",
                type: "Sexual Assault Support",
                number: "1-800-656-4673",
                description: "Free and confidential support for sexual assault survivors",
                link: "https://www.rainn.org"
            },
            {
                title: "Crisis Text Line",
                type: "Mental Health Crisis",
                number: "Text HOME to 741741",
                description: "Free crisis counseling via text message",
                link: "https://www.crisistextline.org"
            },
            {
                title: "National Suicide Prevention Lifeline",
                type: "Suicide Prevention",
                number: "1-888-273-8255",
                description: "24/7 support for people in suicidal crisis",
                link: "https://suicidepreventionlifeline.org"
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "911",
                description: "Call for immediate emergency assistance",
                link: ""
            }
        ]
    },
    uk: {
        country: "United Kingdom",
        contacts: [
            {
                title: "Women's Aid 24-Hour National Domestic Abuse Helpline",
                type: "Domestic Violence Support",
                number: "0808 2000 247",
                description: "Free, confidential support for women experiencing domestic abuse",
                link: "https://www.womensaid.org.uk"
            },
            {
                title: "Rape Crisis England & Wales",
                type: "Sexual Assault Support",
                number: "0808 802 9999",
                description: "Support for people affected by sexual violence",
                link: "https://rapecrisis.org.uk"
            },
            {
                title: "Samaritans",
                type: "Mental Health Crisis",
                number: "116 123",
                description: "24/7 emotional support",
                link: "https://www.samaritans.org"
            },
            {
                title: "Mind Infoline",
                type: "Mental Health Support",
                number: "0300 123 3393",
                description: "Mental health information and support",
                link: "https://www.mind.org.uk"
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "999",
                description: "Call for immediate emergency assistance",
                link: ""
            }
        ]
    },
    canada: {
        country: "Canada",
        contacts: [
            {
                title: "Assaulted Women's Helpline",
                type: "Domestic Violence Support",
                number: "1-866-863-0511",
                description: "24/7 confidential support for domestic violence victims",
                link: "https://www.awh.org"
            },
            {
                title: "RAINN Canada",
                type: "Sexual Assault Support",
                number: "1-888-933-9007",
                description: "Support for sexual assault survivors",
                link: "https://www.rainn.org"
            },
            {
                title: "Crisis Text Line",
                type: "Mental Health Crisis",
                number: "Text HELLO to 741741",
                description: "Crisis support via text message",
                link: "https://www.crisistextline.org"
            },
            {
                title: "Kids Help Phone",
                type: "Youth Support",
                number: "1-800-668-6868",
                description: "Support for youth and families",
                link: "https://www.kidshelpphone.ca"
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "911",
                description: "Call for immediate emergency assistance",
                link: ""
            }
        ]
    },
    australia: {
        country: "Australia",
        contacts: [
            {
                title: "1800RESPECT",
                type: "Domestic Violence & Sexual Assault",
                number: "1800 737 732",
                description: "24/7 support for domestic and family violence and sexual assault",
                link: "https://www.1800respect.org.au"
            },
            {
                title: "Lifeline Australia",
                type: "Mental Health Crisis",
                number: "13 11 14",
                description: "24/7 crisis support",
                link: "https://www.lifeline.org.au"
            },
            {
                title: "Beyond Blue",
                type: "Mental Health Support",
                number: "1300 224 636",
                description: "Support for depression, anxiety, and mental health",
                link: "https://www.beyondblue.org.au"
            },
            {
                title: "Women's Safety Services",
                type: "Women's Support",
                number: "1800 811 811",
                description: "Support services for women in crisis",
                link: "https://www.dss.gov.au"
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "000",
                description: "Call for immediate emergency assistance",
                link: ""
            }
        ]
    },
    india: {
        country: "India",
        contacts: [
            {
                title: "Women's Helpline",
                type: "Domestic Violence Support",
                number: "181",
                description: "24-hour helpline for women in distress",
                link: ""
            },
            {
                title: "AASRA - Suicide Prevention",
                type: "Suicide Prevention",
                number: "9820466726",
                description: "Support for people in crisis",
                link: "https://www.aasra.info"
            },
            {
                title: "iCall - Emotional Support",
                type: "Mental Health Support",
                number: "9152987821",
                description: "Anonymous emotional support and counseling",
                link: "https://www.icallhelpline.org"
            },
            {
                title: "Vandrevala Foundation",
                type: "Mental Health Crisis",
                number: "9999 666 555",
                description: "24/7 helpline for people in emotional distress",
                link: "https://www.vandrevalafoundation.com"
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "100",
                description: "Police - Call for immediate emergency assistance",
                link: ""
            }
        ]
    },
    afghanistan: {
        country: "Afghanistan",
        contacts: [
            {
                title: "EVAW Organization",
                type: "Women's Rights Support",
                number: "+93 (0)799 502 502",
                description: "Support for women affected by violence",
                link: "https://www.evawafghanistan.org"
            },
            {
                title: "Afghan Women's Organization",
                type: "Women's Support",
                number: "+93 (0)20 2500 8900",
                description: "Advocacy and support for Afghan women",
                link: ""
            },
            {
                title: "Legal Aid Organization",
                type: "Legal Support",
                number: "+93 (0)20 2100 0000",
                description: "Legal assistance and advocacy",
                link: ""
            },
            {
                title: "International Rescue Committee",
                type: "Humanitarian Support",
                number: "+93 (0)20 2500 7700",
                description: "Assistance for vulnerable populations",
                link: "https://www.rescue.org"
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "119",
                description: "Police - Call for immediate emergency",
                link: ""
            }
        ]
    },
    iran: {
        country: "Iran",
        contacts: [
            {
                title: "Women's Shelter Network",
                type: "Domestic Violence Support",
                number: "+98 (0)21 6450 8688",
                description: "Support and shelter for women in crisis",
                link: ""
            },
            {
                title: "Legal Assistance Center for Women",
                type: "Legal Support",
                number: "+98 (0)21 8877 0088",
                description: "Legal aid and advocacy for women's rights",
                link: ""
            },
            {
                title: "Telephone Counseling",
                type: "Mental Health Support",
                number: "+98 (0)21 6133 4150",
                description: "Confidential counseling services",
                link: ""
            },
            {
                title: "Crisis Support Line",
                type: "Crisis Support",
                number: "+98 (0)21 4497 9200",
                description: "Support in times of crisis",
                link: ""
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "110",
                description: "Police - Call for immediate emergency",
                link: ""
            }
        ]
    },
    pakistan: {
        country: "Pakistan",
        contacts: [
            {
                title: "Aurat Foundation",
                type: "Women's Rights Support",
                number: "+92 (0)21 3563 6888",
                description: "Support and advocacy for women's rights",
                link: "https://www.aurat.org"
            },
            {
                title: "Domestic Violence Hotline",
                type: "Domestic Violence Support",
                number: "+92 (0)21 3830 5933",
                description: "24-hour support for domestic violence victims",
                link: ""
            },
            {
                title: "Befrienders Pakistan",
                type: "Mental Health Crisis",
                number: "+92 (0)21 3561 6422",
                description: "Emotional support and suicide prevention",
                link: "https://www.befrienderspakistan.org"
            },
            {
                title: "Women's Support Cell",
                type: "Women's Support",
                number: "+92 (0)42 1111 006",
                description: "Legal and emotional support for women",
                link: ""
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "15",
                description: "Police - Call for immediate emergency",
                link: ""
            }
        ]
    },
    mexico: {
        country: "Mexico",
        contacts: [
            {
                title: "Instituto Nacional de las Mujeres",
                type: "Women's Rights Support",
                number: "01-800-911-2511",
                description: "Support and resources for women in Mexico",
                link: "https://www.gob.mx/inmujeres"
            },
            {
                title: "Línea PAS - Domestic Violence",
                type: "Domestic Violence Support",
                number: "(55) 5658-1111",
                description: "Support for domestic violence victims",
                link: ""
            },
            {
                title: "TELSAUDE - Mental Health",
                type: "Mental Health Support",
                number: "01-800-710-3000",
                description: "Mental health support and counseling",
                link: ""
            },
            {
                title: "Crisis Support",
                type: "Crisis Support",
                number: "(55) 5259-8121",
                description: "24-hour crisis support",
                link: ""
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "911",
                description: "Call for immediate emergency assistance",
                link: ""
            }
        ]
    },
    brazil: {
        country: "Brazil",
        contacts: [
            {
                title: "Central de Atendimento à Mulher",
                type: "Women's Support",
                number: "180",
                description: "24-hour support for women experiencing violence",
                link: ""
            },
            {
                title: "CVV - Suicide Prevention",
                type: "Suicide Prevention",
                number: "188",
                description: "24/7 emotional support",
                link: "https://www.cvv.org.br"
            },
            {
                title: "Disque Direitos Humanos",
                type: "Human Rights Support",
                number: "100",
                description: "Support for human rights violations",
                link: ""
            },
            {
                title: "Sexual Violence Support",
                type: "Sexual Assault Support",
                number: "+55 (0)11 3066-5500",
                description: "Support for sexual violence victims",
                link: ""
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "190",
                description: "Police - Call for immediate emergency",
                link: ""
            }
        ]
    },
    france: {
        country: "France",
        contacts: [
            {
                title: "Violences Femmes Info",
                type: "Domestic Violence Support",
                number: "3919",
                description: "24-hour support for victims of violence",
                link: "https://www.violencesfemmesinfo.org"
            },
            {
                title: "Viol Femmes Informations",
                type: "Sexual Assault Support",
                number: "0800 05 95 95",
                description: "Support for sexual assault victims",
                link: ""
            },
            {
                title: "SOS Amitié",
                type: "Mental Health Support",
                number: "09 72 39 40 50",
                description: "Emotional support and counseling",
                link: "https://www.sosamitie.org"
            },
            {
                title: "Suicide Écoute",
                type: "Suicide Prevention",
                number: "01 45 39 40 00",
                description: "Support for people in suicidal crisis",
                link: ""
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "112",
                description: "Call for immediate emergency assistance",
                link: ""
            }
        ]
    },
    germany: {
        country: "Germany",
        contacts: [
            {
                title: "Telefonseelsorge",
                type: "Emotional Support",
                number: "0800 111 0 111 or 0800 111 0 222",
                description: "24/7 emotional and psychological support",
                link: "https://www.telefonseelsorge.de"
            },
            {
                title: "DGeSG - Women's Violence Support",
                type: "Domestic Violence Support",
                number: "08000 116016",
                description: "Support for women experiencing violence",
                link: ""
            },
            {
                title: "Online-Beratung",
                type: "Mental Health Support",
                number: "Online support available",
                description: "Online counseling and support services",
                link: "https://www.telefonseelsorge.de"
            },
            {
                title: "Frauentelefon",
                type: "Women's Support",
                number: "030 615 42 43",
                description: "Support and advice for women",
                link: ""
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "112",
                description: "Call for immediate emergency assistance",
                link: ""
            }
        ]
    },
    japan: {
        country: "Japan",
        contacts: [
            {
                title: "Women's Consultation Center",
                type: "Women's Support",
                number: "03-5467-2433",
                description: "Support and counseling for women",
                link: ""
            },
            {
                title: "DV Hotline",
                type: "Domestic Violence Support",
                number: "0120-279-556",
                description: "24-hour support for domestic violence",
                link: ""
            },
            {
                title: "TELL Lifeline",
                type: "Mental Health Crisis",
                number: "03-5774-0992",
                description: "24-hour crisis support",
                link: "https://telljapan.org"
            },
            {
                title: "Inochi no Denwa",
                type: "Suicide Prevention",
                number: "0570-783-556",
                description: "Suicide prevention support",
                link: ""
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "110",
                description: "Police - Call for immediate emergency",
                link: ""
            }
        ]
    },
    southkorea: {
        country: "South Korea",
        contacts: [
            {
                title: "Women's Human Rights Center",
                type: "Women's Rights Support",
                number: "+82 (0)2 958-0001",
                description: "Support and advocacy for women's rights",
                link: ""
            },
            {
                title: "Domestic Violence Hotline",
                type: "Domestic Violence Support",
                number: "1366",
                description: "24-hour support for domestic violence",
                link: ""
            },
            {
                title: "Mental Health Crisis Line",
                type: "Mental Health Crisis",
                number: "1393",
                description: "24-hour mental health support",
                link: ""
            },
            {
                title: "Suicide Prevention Center",
                type: "Suicide Prevention",
                number: "(02) 2203-0053",
                description: "Suicide prevention and crisis support",
                link: ""
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "112",
                description: "Police - Call for immediate emergency",
                link: ""
            }
        ]
    },
    southafrica: {
        country: "South Africa",
        contacts: [
            {
                title: "GBV Command Centre",
                type: "Gender-Based Violence Support",
                number: "0800 005 009",
                description: "24-hour support for gender-based violence",
                link: ""
            },
            {
                title: "NISAA Institute for Women's Development",
                type: "Women's Rights Support",
                number: "011 839 3736",
                description: "Support and advocacy for women",
                link: "https://www.nisaawomen.org"
            },
            {
                title: "Sexual Offences Units",
                type: "Sexual Assault Support",
                number: "1011 (toll-free)",
                description: "Support for sexual assault survivors",
                link: ""
            },
            {
                title: "Lifeline South Africa",
                type: "Mental Health Crisis",
                number: "0861 322 322",
                description: "24-hour crisis support",
                link: "https://lifelinesa.org.za"
            },
            {
                title: "Emergency Services",
                type: "Emergency",
                number: "10177",
                description: "Police - Call for immediate emergency",
                link: ""
            }
        ]
    }
};

// Function to display emergency contacts
function displayEmergencyContacts() {
    const countrySelect = document.getElementById('countrySelect');
    const emergencyContactsDiv = document.getElementById('emergencyContacts');

    if (!countrySelect || !emergencyContactsDiv) return;

    countrySelect.addEventListener('change', function() {
        const selectedCountry = this.value;

        if (!selectedCountry) {
            emergencyContactsDiv.innerHTML = '<div class="placeholder"><p>👆 Please select your country to view emergency contacts</p></div>';
            return;
        }

        const contacts = emergencyContacts[selectedCountry];
        if (!contacts) {
            emergencyContactsDiv.innerHTML = '<div class="placeholder"><p>Sorry, contacts for this country are not yet available.</p></div>';
            return;
        }

        let contactsHTML = '';
        contacts.contacts.forEach(contact => {
            contactsHTML += `
                <div class="contact-card">
                    <h3>${contact.title}</h3>
                    <div class="contact-type">${contact.type}</div>
                    <div class="contact-number">${contact.number}</div>
                    <p class="contact-description">${contact.description}</p>
                    ${contact.link ? `<a href="${contact.link}" target="_blank" class="contact-link">Learn More →</a>` : ''}
                </div>
            `;
        });

        emergencyContactsDiv.innerHTML = contactsHTML;
    });
}

// Function to handle chatroom messaging
function setupChatroom() {
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');

    if (!messageInput || !sendBtn || !chatMessages) {
        return;
    }

    const currentUser = {
        name: 'You',
        initials: 'Y'
    };

    function sendMessage() {
        const messageText = messageInput.value.trim();

        if (messageText === '') {
            return;
        }

        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'message user-message';
        userMessageDiv.innerHTML = `
            <div class="message-content" style="order: 2;">
                <p class="message-username">${currentUser.name}</p>
                <p class="message-text">${messageText}</p>
                <span class="message-time">just now</span>
            </div>
            <div class="message-avatar" style="order: 3; background: linear-gradient(135deg, #FFB6D9, #E91E63);">${currentUser.initials}</div>
        `;

        chatMessages.appendChild(userMessageDiv);
        messageInput.value = '';
        messageInput.focus();
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            const responses = [
                "That's so true! I completely agree with you.",
                "Thank you for sharing this perspective. It really resonates with me. 💜",
                "This is exactly what we need to talk about. Thank you!",
                "I'm so glad someone said this. We need more voices like yours.",
                "This is an important point. Let's keep the conversation going!"
            ];

            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            const respondents = ['Emma', 'Sophia', 'Maya', 'Leah', 'Aria'];
            const respondent = respondents[Math.floor(Math.random() * respondents.length)];
            const initials = respondent.charAt(0);

            const responseDiv = document.createElement('div');
            responseDiv.className = 'message other-message';
            responseDiv.innerHTML = `
                <div class="message-avatar">${initials}</div>
                <div class="message-content">
                    <p class="message-username">${respondent}</p>
                    <p class="message-text">${randomResponse}</p>
                    <span class="message-time">just now</span>
                </div>
            `;

            chatMessages.appendChild(responseDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500 + Math.random() * 1000);
    }

    sendBtn.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayEmergencyContacts();
    setupChatroom();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.feature-card, .news-card, .contact-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});