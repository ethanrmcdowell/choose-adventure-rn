const plot = [{
  id: 0,
  title: "Part 1",
  content: "You've just arrived at Camp Placeholdertext. After a teaful goodbye with your parents, you have some free time. What would you like to do?",
  choices: [{
    text: "There's a group by the basketball court, let's check it out!",
    target: 1
  },{
    text: "Hide behind the nearest cabin and let all the tears out.",
    target: 2
  }]
},{
  id: 1,
  title: "Branch 1 - Part 2",
  content: "You approach the group by the basketball court, but no one responds to your arrival.",
  choices: [{
    text: "Scream at the group 'HELLO! I'm a brand new camper, want to be my friend?",
    target: 17
  },{
    text: "Sneakily get closer and listen to their conversation",
    target: 3
  }]
},{
  id: 2,
  title: "Cry it out, friend.",
  content: "You find a relatively comfy spot behind the nearest cabin and let it all out. This is the first time away from your family and you're not dealing with it very well!",
  choices: [{
    text: "Pull it together and wipe away those tears. There's a group of kids talking not too far away, let's go check it out.",
    target: 4
  },{
    text: "Sit and think and cry.",
    target: 18
  }]
},{
  id: 3,
  title: "Branch 1 - Part 4",
  content: "You overhear the group speaking about a SUPERNATURAL KILLER that roams the campground every summer. As the conversation is getting meaty, they speak in hushed tones.",
  choices: [{
    text: "Attempt to get closer to hear the rest of the conversation.",
    target: 14
  },{
    text: "Head back - it's almost time for orientation!",
    target: 4
  }]
},{
  id: 4,
  title: "Branch 1 - Part 5",
  content: "You head back to the entrance where you see multiple campers and councillors.",
  choices: [{
    text: "Settle in to listen to the councillors speak.",
    target: 5
  },{
    text: "Approach the councillors and ask them about the MURDERER rumors.",
    target: 12
  },{
    text: "Take things into your own hands (BAD).",
    target: 6
  }]
},{
  id: 5,
  title: "MAIN STORY BRANCH FINALE",
  content: "As campers filter in through the gates, the councillors greet everyone and introduce you to CAMP PLACEHOLDER TEXT!",
  choices: [{
    text: "This is the end of the road for now. Start over?",
    target: 0
  }]
},{
  id: 6,
  title: "Are you the murderer?",
  content: "It's been too long since I've known the thrill of a murder. Let's take them all out.",
  choices: [{
    text: "Continue...",
    target: 7
  }]
},{
  id: 7,
  title: "Decisions...",
  content: "Which weapon would you like to use?",
  choices: [{
    text: "Hammer",
    target: 8
  },{
    text: "Oh, there's a lake here...",
    target: 10
  }]
},{
  id: 8,
  title: "Hammer",
  content: "You find a hammer on the ground by the utility shed nearby. You slowly approach the group of campers and councillors and throw the hammer at the head councillor!",
  choices: [{
    text: "Continue",
    target: 9
  }]
},{
  id: 9,
  title: "Hammer",
  content: "It hits the councillor in the head, and bounces off, hitting the next councillor, bounching off and hitting the next councillor. It continues until everyone is dead. You're insane.",
  choices: [{
    text: "Start over?",
    target: 0
  }]
},{
  id: 10,
  title: "Lake",
  content: "As the orientation continues, they eventually show you the local lake and docks. Grabbing a rock, you charge at the lead councillor, bashing him in the head and pushing the body in the lake.",
  choices: [{
    text: "Continue",
    target: 11
  }]
},{
  id: 11,
  title: "Lake",
  content: "You didn't even try to hide the murder you just committed, so you're restrained and taken to jail. Idiot.",
  choices: [{
    text: "Start over?",
    target: 0
  }]
},{
  id: 12,
  title: "Inquire about murderer with councillors",
  content: "You approach the councillors and ask about the rumors of a SUPERNATURAL MURDERER. The head councillor smirks and rolls his eyes.",
  choices: [{
    text: "Continue",
    target: 13
  }]
},{
  id: 13,
  title: "You're not taken very seriously...",
  content: "'Murder Pete isn't real, dummy', says the lead councillor. All of the veteran councillors laugh at you.",
  choices: [{
    text: "You feel shame.",
    target: 5
  }]
},{
  id: 14,
  title: "YOU ROLLED A ONE, NOT VERY STEALTHY",
  content: "Unfortunately, you're not very stealthy. Probably because you're going through puberty or something.",
  choices: [{
    text: "Continue...",
    target: 15
  }]
},{
  id: 15,
  title: "Walk of shame",
  content: "You trip over a rock trying to get closer. The campers grouped up all notice, laugh at you, and move further away.",
  choices: [{
    text: "You feel shame.",
    target: 4
  }]
},{
  id: 16,
  title: "Bad social skills",
  content: "Your fellow campers just stare at you. You're not very charismatic and rolled a 1. Maybe you should have been socialized more.",
  choices: [{
    text: "You feel shame.",
    target: 4
  }]
},{
  id: 17,
  title: "feelsbadman",
  content: "As you sit and stare into the woods with the tears flowing down, you hear a twig break.",
  choices: [{
    text: "Check it out!",
    target: 18
  },{
    text: "Nervously flee the area and move towards the closest group of campers.",
    target: 3
  }]
},{
  id: 18,
  title: "stop being so brave",
  content: "You stand up and move closer to the woods. As you do, a dark figure wearing a stupid mask jumps out from behind a tree! As he does, he pulls out a comically large sword. The next thing you know, it's plunged into your chest!",
  choices: [{
    text: "You died.",
    target: 0
  }]
},
]

export default plot;