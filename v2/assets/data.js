/* All the site's content. To add something, copy an entry in the right list and change the words.
   posts    = the Home feed        chapters = My story
   projects = My work              certs    = Certifications      hobbies = Off the clock
   Images go in the images folder and are named here by file name. */
window.SITE = {
  "categories": {
    "client": "Client work",
    "campaign": "Campaign",
    "event": "Event",
    "life": "Life"
  },
  "filterLabels": {
    "client": "Client work",
    "campaign": "Campaigns",
    "event": "Events",
    "life": "Life"
  },
  "posts": [
    {
      "id": "launchy",
      "cat": "client",
      "title": "Launchy #001",
      "kicker": "Launchy · Marketing Assistant · September 2026",
      "caption": "A Dublin launch night for founders, creators and makers. I managed the Eventbrite and Meetup listings and registrations: around 190 tickets booked and 100 people in the room.",
      "tags": [
        "Event marketing",
        "Community",
        "Social"
      ],
      "img": "images/launchy-03-team.jpg",
      "pos": "center 30%",
      "links": [
        {
          "label": "Read the case study",
          "url": "case-launchy.html"
        },
        {
          "label": "See the post on LinkedIn",
          "url": "https://www.linkedin.com/posts/sanchiahuja_launchy-irishstartups-marketing-ugcPost-7518124928165097472-ma6w/"
        },
        {
          "label": "Read the founder's write-up",
          "url": "https://www.conorlyn.ch/p/from-concept-to-200-rsvps-in-12-weeks"
        }
      ]
    },
    {
      "id": "iac",
      "cat": "client",
      "title": "A B2B brand from a blank page",
      "kicker": "Irish AI Consultancy · October 2026 to present",
      "caption": "I launched the company LinkedIn page, planned and scheduled its content, and set up HubSpot with around 900 contacts for outreach.",
      "tags": [
        "B2B social",
        "Content planning",
        "HubSpot"
      ],
      "img": "images/iac-linkedin-page.jpg",
      "links": [
        {
          "label": "See the LinkedIn page",
          "url": "https://www.linkedin.com/company/irish-ai-consultancy/"
        }
      ]
    },
    {
      "id": "winglift",
      "cat": "client",
      "title": "WingLift: messaging and brand",
      "kicker": "Irish AI Consultancy · 2026",
      "caption": "Website messaging, copy and branding for WingLift, a tool that shows businesses how AI assistants describe and recommend them.",
      "tags": [
        "Brand messaging",
        "Web copy",
        "Branding"
      ],
      "img": "images/winglift-homepage.jpg",
      "links": [
        {
          "label": "Visit winglift.io",
          "url": "https://winglift.io"
        }
      ]
    },
    {
      "id": "guinness",
      "cat": "campaign",
      "title": "Guinness Forecast",
      "kicker": "Self-initiated · 2026",
      "caption": "A weather-led summer platform built on one insight: in Ireland, a sunny day is rare enough to change everyone’s plans.",
      "tags": [
        "Brand strategy",
        "Out-of-home",
        "Social"
      ],
      "img": "images/guinness-hero-pint.png",
      "links": [
        {
          "label": "Read the case study",
          "url": "case-guinness.html"
        }
      ]
    },
    {
      "id": "list",
      "cat": "client",
      "title": "The Launchy List",
      "kicker": "Launchy · Newsletter",
      "caption": "The newsletter I manage for Launchy: 1,064 subscribers after two editions, supported by an AI research workflow I built.",
      "tags": [
        "Email",
        "AI automation"
      ],
      "img": "images/launchy-list-edition-2.jpg",
      "links": [
        {
          "label": "Read edition 2",
          "url": "https://www.linkedin.com/pulse/launchy-list-edition-2-conor-lynch-6khnf/"
        }
      ]
    },
    {
      "id": "staq",
      "cat": "client",
      "title": "LinkedIn strategy for Staq AI",
      "kicker": "Live client · Dogpatch Labs",
      "caption": "A brand toolkit, four content pillars and a lead generation plan for an AI recruitment startup. The founder put several of the frameworks to use.",
      "tags": [
        "LinkedIn",
        "Lead generation",
        "Content pillars"
      ],
      "img": "images/staq-pillars.png",
      "links": [
        {
          "label": "Read the case study",
          "url": "case-staq.html"
        }
      ]
    },
    {
      "id": "sme",
      "cat": "client",
      "title": "A content ecosystem for the SME Business Show",
      "kicker": "Live client · Content Ecosystem Lead · 2026",
      "caption": "A brand and content strategy for an Irish video interview platform for small businesses. I led the content ecosystem: a system that turns every episode into clips, posts, emails and searchable pages.",
      "tags": [
        "Content strategy",
        "Brand strategy",
        "Video"
      ],
      "img": "images/trinity-sme-business-show-team.jpg",
      "links": [
        {
          "label": "See the post on LinkedIn",
          "url": "https://lnkd.in/p/eS8UaGPv"
        }
      ]
    },
    {
      "id": "mii",
      "cat": "event",
      "title": "Marketing in Ireland turns five",
      "kicker": "Event · Dublin · July 2026",
      "caption": "Behind the camera at the community’s 5th anniversary, where I photographed the celebration and supported the event team.",
      "tags": [
        "Event photography",
        "Event delivery"
      ],
      "img": "images/marketing-in-ireland-02-panel.jpg",
      "links": [
        {
          "label": "Read the chapter",
          "url": "story.html"
        }
      ]
    },
    {
      "id": "tuborg",
      "cat": "campaign",
      "title": "Tuborg: Off The Record Nights",
      "kicker": "Brand campaign · Campaign film",
      "caption": "A campaign giving Gen Z permission to be offline for a night, with a two-minute film I produced end to end.",
      "tags": [
        "Consumer insight",
        "Video",
        "Gen Z"
      ],
      "img": "images/tuborg-hero.png",
      "links": [
        {
          "label": "Read the case study",
          "url": "case-tuborg.html"
        }
      ],
      "video": "media/tuborg-off-the-record-nights.mp4"
    },
    {
      "id": "smoking",
      "cat": "campaign",
      "title": "Cleaning Dublin. Your lungs next?",
      "kicker": "Advocacy campaign",
      "caption": "Lung-shaped boxes filled with cigarette butts collected across Dublin, created for a street activation and an advocacy film for EU policymakers.",
      "tags": [
        "Advocacy",
        "Activation",
        "Video"
      ],
      "img": "images/smoking-protest.png",
      "links": [
        {
          "label": "Read the case study",
          "url": "case-smoking.html"
        }
      ]
    },
    {
      "id": "iiba",
      "cat": "event",
      "title": "IIBA Annual Business Networking",
      "kicker": "Event · Trinity College Dublin · June 2026",
      "caption": "Front of house for the Ireland India Business Association: registration and check-in for around 30 guests, and a welcome for the dignitaries.",
      "tags": [
        "Guest experience",
        "Event delivery"
      ],
      "img": "images/iiba-03-dignitaries.jpg",
      "links": [
        {
          "label": "See the post on LinkedIn",
          "url": "https://lnkd.in/p/eFhtCiQ2"
        }
      ]
    },
    {
      "id": "bah",
      "cat": "campaign",
      "title": "A content engine for BAH33°",
      "kicker": "Content strategy",
      "caption": "Four content pillars and a content calendar for a Brazilian steakhouse in Dublin.",
      "tags": [
        "Content strategy",
        "Instagram",
        "TikTok"
      ],
      "img": "images/bah33.png",
      "links": [
        {
          "label": "Read the case study",
          "url": "case-bah33.html"
        }
      ]
    },
    {
      "id": "grad",
      "cat": "life",
      "title": "Graduation day",
      "kicker": "Trinity College Dublin · 27 October 2026",
      "caption": "MSc Marketing, complete. One chapter closed, with the next already under way.",
      "tags": [
        "Milestone"
      ],
      "img": "images/graduation-01.jpg",
      "pos": "center 30%",
      "links": [
        {
          "label": "See the post on LinkedIn",
          "url": "https://lnkd.in/p/eZ3VX-kb"
        },
        {
          "label": "Read my story",
          "url": "story.html"
        }
      ]
    }
  ],
  "chapters": [
    {
      "year": "2022",
      "name": "The spark",
      "meta": "Innovist, India",
      "title": "It began at a pop-up stall.",
      "hook": "My first role in marketing was with Innovist, the personal care company behind Bare Anatomy, as it prepared for its first pop-up. For two days I watched people decide, in real time, whether to buy. I have been curious about that moment ever since.",
      "steps": [
        {
          "label": "What I worked on",
          "text": "Coordinating the pop-up, writing influencer ad scripts for YouTube and Instagram, and researching competitors ahead of three product launches."
        },
        {
          "label": "What it taught me",
          "text": "People rarely buy for the reason a brand expects. The interesting work is finding the real one."
        }
      ],
      "teaser": "Curiosity needed evidence. So my next move was into data.",
      "stat": "₹400,000",
      "statLabel": "in sales across the two days",
      "img": "images/innovist-01-spin-wheel.jpg",
      "pos": "center 45%",
      "more": [
        {
          "img": "images/innovist-02-brand-stand.jpg",
          "alt": "The Bare Anatomy stand at the pop-up"
        }
      ]
    },
    {
      "year": "2023",
      "name": "The numbers",
      "meta": "KPMG, India",
      "title": "Two years of learning what the numbers say.",
      "hook": "At KPMG I worked in quality and risk management, handling 80 client accounts a week. It was a long way from a pop-up stall, and exactly the training I needed.",
      "steps": [
        {
          "label": "What I worked on",
          "text": "Analysing large datasets and turning them into clear reports and recommendations for senior stakeholders, and coordinating with UK-based teams to support project delivery."
        },
        {
          "label": "What it taught me",
          "text": "Precision under pressure. I earned the highest internal AML and KYC accreditation and a SPOT Award, and was trusted to mentor and onboard new joiners."
        }
      ],
      "teaser": "Data showed me what people do. To understand why, I moved to Dublin.",
      "stat": "97%",
      "statLabel": "accuracy across 80 client accounts a week",
      "img": "images/kpmg-01-welcome.jpg",
      "pos": "center 35%",
      "more": [
        {
          "img": "images/kpmg-02-team.jpg",
          "alt": "With the team at KPMG"
        }
      ]
    },
    {
      "year": "2025",
      "name": "The leap",
      "meta": "Trinity College Dublin",
      "title": "Dublin, and a year of asking why.",
      "hook": "I moved to Ireland for an MSc in Marketing at Trinity College Dublin, and spent the year turning observations about people into campaigns.",
      "steps": [
        {
          "label": "What I worked on",
          "text": "Live client work for the SME Business Show and Staq AI, alongside campaign platforms for Guinness, Tuborg, a Dublin steakhouse and a public health brief."
        },
        {
          "label": "What it taught me",
          "text": "Every strong campaign starts with one honest observation about people. Finding it is the job."
        }
      ],
      "teaser": "By the summer, I wanted to be where the industry actually meets.",
      "stat": "6",
      "statLabel": "projects, two of them for live clients",
      "img": "images/trinity-sme-business-show-team.jpg",
      "more": [
        {
          "img": "images/graduation-01.jpg",
          "alt": "Graduation day at Trinity College Dublin"
        }
      ]
    },
    {
      "year": "June 2026",
      "name": "The front desk",
      "meta": "Ireland India Business Association, Dublin",
      "title": "First, I got in the room.",
      "hook": "The quickest way into a city's business community is to help run the events where it gathers. Mine began at the Ireland India Business Association's Annual Business Networking event at Trinity College Dublin.",
      "steps": [
        {
          "label": "What I worked on",
          "text": "Running registration and check-in, preparing name badges, and welcoming guests and dignitaries as they arrived."
        },
        {
          "label": "What it taught me",
          "text": "The welcome sets the tone. Guests decide how an event feels in the first two minutes, at the door."
        }
      ],
      "teaser": "A month later, I swapped the registration desk for a camera.",
      "stat": "30",
      "statLabel": "guests registered and welcomed, approximately",
      "img": "images/iiba-02-group.jpg",
      "more": [
        {
          "img": "images/iiba-03-dignitaries.jpg",
          "alt": "With guests at the IIBA Annual Business Networking event"
        },
        {
          "img": "images/iiba-04-welcome-stage.jpg",
          "alt": "The welcome address at the IIBA event"
        },
        {
          "img": "images/iiba-01-welcome-banner.jpg",
          "alt": "At the IIBA Annual Business Networking event"
        }
      ]
    },
    {
      "year": "July 2026",
      "name": "The anniversary",
      "meta": "Marketing in Ireland, Dublin",
      "title": "Behind the camera at a community's fifth birthday.",
      "hook": "Marketing in Ireland marked its 5th anniversary with an outdoor celebration in Dublin. I joined the event team and spent the day documenting it.",
      "steps": [
        {
          "label": "What I worked on",
          "text": "Photographing the celebration, helping to set up the space, and keeping the logistics moving through the day."
        },
        {
          "label": "What it taught me",
          "text": "A community is a brand's strongest channel. People came for each other, and the event simply gave them the reason."
        }
      ],
      "teaser": "Helping to run a room is one thing. Next, I was asked to fill one.",
      "stat": "5",
      "statLabel": "years of the Marketing in Ireland community, celebrated in July 2026",
      "img": "images/marketing-in-ireland-02-panel.jpg",
      "more": [
        {
          "img": "images/marketing-in-ireland-03-cake.jpg",
          "alt": "The anniversary cake at the Marketing in Ireland celebration"
        },
        {
          "img": "images/marketing-in-ireland-04-with-friends.jpg",
          "alt": "At the Marketing in Ireland 5th anniversary"
        },
        {
          "img": "images/marketing-in-ireland-01-meditation.jpg",
          "alt": "Guests at the Marketing in Ireland 5th anniversary"
        },
        {
          "img": "images/marketing-in-ireland-05-cake-table.jpg",
          "alt": "Details from the Marketing in Ireland 5th anniversary"
        }
      ]
    },
    {
      "year": "August 2026",
      "name": "The full room",
      "meta": "Launchy, Dublin",
      "title": "Launchy #001: one night, 190 tickets.",
      "hook": "Launchy is a Dublin launch night where founders, creators and makers present what they are building. I joined as Marketing Assistant ahead of the first one, with a simple brief: fill the room.",
      "steps": [
        {
          "label": "What I worked on",
          "text": "Managing the Eventbrite and Meetup listings and registrations, coordinating social creative with a designer, and keeping the sponsor list and content schedule on track."
        },
        {
          "label": "What came next",
          "text": "The Launchy List, a newsletter that has reached 1,064 subscribers in two editions, supported by an AI research workflow I built."
        }
      ],
      "teaser": "A full room is a good problem to have. The next brief started with a blank page.",
      "stat": "190",
      "statLabel": "tickets booked, with around 100 people in the room",
      "img": "images/launchy-02-001-stage.jpg",
      "more": [
        {
          "img": "images/launchy-03-team.jpg",
          "alt": "The Launchy #001 team"
        },
        {
          "img": "images/launchy-01-whelans.jpg",
          "alt": "Outside the venue before Launchy #001"
        },
        {
          "img": "images/launchy-list-edition-2.jpg",
          "alt": "The Launchy List, edition 2"
        }
      ]
    },
    {
      "year": "October 2026",
      "name": "The blank page",
      "meta": "Irish AI Consultancy, Dublin",
      "title": "Building a B2B brand from a blank page.",
      "hook": "Irish AI Consultancy had deep expertise and no marketing foundations yet. I joined in business development, marketing and events to build them, and I am still there.",
      "steps": [
        {
          "label": "What I worked on",
          "text": "Launching the company LinkedIn page, planning and scheduling its content, setting up HubSpot from scratch, and shaping the website messaging, copy and branding for WingLift."
        },
        {
          "label": "What is next",
          "text": "The company’s upcoming event, where I am coordinating venues."
        }
      ],
      "teaser": "",
      "stat": "900",
      "statLabel": "contacts built into HubSpot for outreach",
      "img": "images/iac-linkedin-page.jpg",
      "more": [
        {
          "img": "images/iac-post-02-guinness.jpg",
          "alt": "Image from an Irish AI Consultancy LinkedIn post"
        },
        {
          "img": "images/winglift-homepage.jpg",
          "alt": "The WingLift homepage"
        }
      ]
    }
  ],
  "projects": [
    {
      "title": "Building a B2B brand from a blank page",
      "client": "Irish AI Consultancy",
      "type": "Social and CRM",
      "insight": "B2B buyers research quietly. A company with no presence looks like a company with nothing to say.",
      "outcome": "Company LinkedIn page launched with a planned content calendar, HubSpot set up with around 900 contacts for outreach, and website messaging, copy and branding shaped for WingLift.",
      "img": "images/iac-linkedin-page.jpg",
      "link": {
        "label": "See the LinkedIn page",
        "url": "https://www.linkedin.com/company/irish-ai-consultancy/"
      }
    },
    {
      "title": "Launchy #001: filling the room",
      "client": "Launchy",
      "type": "Events and email",
      "insight": "Founders show up for other founders. A launch night gives them a reason, and a room.",
      "outcome": "Around 190 tickets booked and 100 people in the room, followed by a newsletter that reached 1,064 subscribers in two editions.",
      "img": "images/launchy-03-team.jpg",
      "link": {
        "label": "Read the case study",
        "url": "case-launchy.html"
      },
      "pos": "center 30%"
    },
    {
      "title": "A content ecosystem for the SME Business Show",
      "client": "SME Business Show, with host Alec Drew",
      "type": "Live client",
      "insight": "The show did not have a content problem. It had a structure problem: each episode was published once, then left behind.",
      "outcome": "As Content Ecosystem Lead in a team of six, I designed the system that turns every episode into a planned set of clips, posts, emails and searchable pages. We presented the full strategy to the host in person.",
      "img": "images/trinity-sme-business-show-team.jpg",
      "link": {
        "label": "See the post on LinkedIn",
        "url": "https://lnkd.in/p/eS8UaGPv"
      }
    },
    {
      "title": "A LinkedIn strategy for an AI recruiter",
      "client": "Staq AI, Dogpatch Labs",
      "type": "Live client",
      "insight": "Recruiters are not short of candidates. They are short of the hours it takes to find the right one.",
      "outcome": "A brand toolkit, four content pillars and a lead generation plan. The founder put several of the frameworks to use.",
      "img": "images/staq-pillars.png",
      "link": {
        "label": "Read the case study",
        "url": "case-staq.html"
      }
    },
    {
      "title": "WingLift: messaging and brand",
      "client": "WingLift, through Irish AI Consultancy",
      "type": "Brand and web copy",
      "insight": "Customers now ask AI assistants for recommendations. Most businesses have no idea what those assistants say about them.",
      "outcome": "Website messaging, copy and branding shaped for WingLift, a tool that shows businesses how AI assistants describe and recommend them.",
      "img": "images/winglift-homepage.jpg",
      "link": {
        "label": "Visit winglift.io",
        "url": "https://winglift.io"
      }
    },
    {
      "title": "Guinness Forecast",
      "client": "Self-initiated brand platform",
      "type": "Brand strategy",
      "insight": "In Ireland, a sunny day is rare enough to change everyone’s plans.",
      "outcome": "A weather-led summer platform across out-of-home, pub activations and social.",
      "img": "images/guinness-hero-pint.png",
      "link": {
        "label": "Read the case study",
        "url": "case-guinness.html"
      }
    },
    {
      "title": "Tuborg: Off The Record Nights",
      "client": "Trinity College Dublin",
      "type": "Brand campaign",
      "insight": "Gen Z is tired of performing online and wants permission to switch off.",
      "outcome": "A campaign concept and a campaign film, produced end to end.",
      "img": "images/tuborg-hero.png",
      "link": {
        "label": "Read the case study",
        "url": "case-tuborg.html"
      },
      "video": "media/tuborg-off-the-record-nights.mp4"
    },
    {
      "title": "Cleaning Dublin. Your lungs next?",
      "client": "Trinity College Dublin",
      "type": "Advocacy",
      "insight": "Everyone knows the harm smoking does. Almost nobody has to look at it.",
      "outcome": "A street activation and an advocacy film aimed at EU policymakers.",
      "img": "images/smoking-protest.png",
      "link": {
        "label": "Read the case study",
        "url": "case-smoking.html"
      }
    },
    {
      "title": "A content engine for BAH33°",
      "client": "Trinity College Dublin",
      "type": "Content strategy",
      "insight": "A premium steakhouse on Dawson Street is a natural choice for client lunches and team dinners, so its content should speak to the people who book them.",
      "outcome": "Four content pillars and a content calendar, with Instagram and TikTok concepts.",
      "img": "images/bah33.png",
      "link": {
        "label": "Read the case study",
        "url": "case-bah33.html"
      }
    }
  ],
  "skills": [
    {
      "label": "Social and content",
      "lead": "Content strategy and day-to-day publishing for B2B and consumer brands.",
      "proof": [
        "Launched and managed a company LinkedIn page for Irish AI Consultancy",
        "Built a LinkedIn toolkit and content pillars for Staq AI",
        "Designed the content ecosystem for the SME Business Show",
        "Planned a four-pillar content calendar for BAH33°"
      ],
      "tools": "LinkedIn · Instagram · Hootsuite · Canva"
    },
    {
      "label": "Events and community",
      "lead": "Event marketing from the registration page to the welcome desk.",
      "proof": [
        "Managed event pages and registrations for the Launchy launch event",
        "Event photography and delivery at the Marketing in Ireland 5th anniversary",
        "Guest registration at the IIBA Annual Business Networking event, Trinity College Dublin"
      ],
      "tools": "Eventbrite · Meetup · Sponsor and guest tracking"
    },
    {
      "label": "CRM, data and AI",
      "lead": "An analyst’s eye for what the numbers say, and the tools to act on it.",
      "proof": [
        "Set up HubSpot and built the contact base at Irish AI Consultancy",
        "Built an AI research workflow for the Launchy List newsletter",
        "Two years at KPMG turning large datasets into reports for senior stakeholders, at 97% accuracy"
      ],
      "tools": "HubSpot · Google Analytics (in progress) · Excel · AI automation"
    }
  ],
  "quotes": [
    {
      "text": "A true team player and force multiplier. Sanchi not only delivers exceptional work but also uplifts those around her through collaboration, positivity, and a strong sense of ownership.",
      "name": "Rahul Khare",
      "role": "Associate Director, KPMG"
    },
    {
      "text": "Sanchi has excellent analytical skills and approaches problems with clarity, logic, and attention to detail. What sets her apart is her ability to grasp new concepts quickly and apply them effectively.",
      "name": "Akansha Sharma",
      "role": "Team Lead at KPMG, Sanchi's mentor"
    },
    {
      "text": "Sanchi consistently impressed me with her professionalism, quick learning, and positive attitude. She brings clarity and creativity to every task she takes on.",
      "name": "Disha Kaur Grover",
      "role": "Team Lead at KPMG"
    }
  ],
  "certs": [
    {
      "label": "Social and content",
      "items": [
        {
          "name": "Social Media Marketing Professional Certificate",
          "by": "Hootsuite · March 2026"
        },
        {
          "name": "Create Scroll Stopping Content",
          "by": "Canva · May 2026"
        },
        {
          "name": "Marketing: Copywriting for Social Media",
          "by": "LinkedIn Learning · March 2026"
        },
        {
          "name": "Marketing: How to Use High-Impact Storytelling",
          "by": "LinkedIn Learning · March 2026"
        },
        {
          "name": "Social Media Marketing: Strategy and Optimization",
          "by": "LinkedIn Learning · March 2026"
        },
        {
          "name": "Content Marketing: Ways to Repurpose Video Content",
          "by": "LinkedIn Learning · March 2026"
        },
        {
          "name": "Social Media Marketing Foundations",
          "by": "LinkedIn Learning · March 2026"
        }
      ]
    },
    {
      "label": "AI for marketing",
      "items": [
        {
          "name": "Generative AI for Digital Marketers",
          "by": "LinkedIn Learning · January 2026"
        },
        {
          "name": "AI-Powered Presentations with ChatGPT and Copilot",
          "by": "LinkedIn Learning · January 2026"
        }
      ]
    },
    {
      "label": "Strategy and data",
      "items": [
        {
          "name": "Marketing Strategy: Nurturing Your Customers",
          "by": "LinkedIn Learning · December 2025"
        },
        {
          "name": "SPSS Statistics Essential Training",
          "by": "LinkedIn Learning · October 2025"
        },
        {
          "name": "Google Analytics",
          "by": "Google · in progress"
        }
      ]
    }
  ],
  "hobbies": [
    {
      "label": "Painting",
      "line": "Patience, composition and knowing when to stop.",
      "caption": "Painting is where I slow down. It has taught me that composition matters as much as colour, on a canvas or in a campaign."
    },
    {
      "label": "Music",
      "line": "Always building the next playlist.",
      "caption": "There is always a playlist in progress. Sequencing songs is not so different from sequencing a story."
    },
    {
      "label": "Training",
      "line": "Early mornings at the gym.",
      "caption": "Early mornings at the gym. Consistency there makes everything else easier."
    }
  ]
};
