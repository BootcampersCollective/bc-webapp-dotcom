// import { Injectable } from '@angular/core';

// @Injectable()
export class ApiService {

  constructor() { }

  getTestimonials () {
    return [
        {
          "name": "Aaron Gottlieb",
          "position": "Front End Contractor at Metricly",
          "long": "As a recent bootcamp grad thrust into the harsh wilderness of job hunting myself I really appreciate everything Bootcampers Collective are doing.  I’ve only made it to one hackathon but it was great experience - meeting other people at the same stage in their nascent coding careers was super helpful, I’m really going to make the effort to get out to more of those. Plus the Bootcampers Collective slack group is a great resource for finding answers to technical questions, helping out other recent grads and just enjoying general camaraderie.  Keep up the good work! You guys are building something really powerful that’s going to help a ton of people.",
          "image": "https://bc-webapp-assets.nyc3.digitaloceanspaces.com/members/aarongo.jpg"
        },
        {
          "name": "Charles Williams",
          "position": null,
          "long": "I want you to know that I have a huge respect for the Bootcampers Collective organization and their mission. I consider myself a proud member of the group ever since I came to the first meet up at the Boulder Beer Brewing Company. Everyone there in Bootcampers Collective makes me feel welcome and showed how willing you are to help others achieve greatness. I always look forward to the meetups and regret when I can’t make it to one.",
          "image": "https://d1qb2nb5cznatu.cloudfront.net/users/6609097-medium_jpg?1498777831"
        },
        {
          "name": "Tyler Williams",
          "position": null,
          "long": "I started attending Bootcampers Collective meetup events as a completely self-taught developer with only a handful of professional experience. I've been to a social event, and a few hackathon sessions. In just a month or two, I've learned a great deal, and found the community to be very welcoming. I'm excited to see where this group takes me in my life.",
          "image": "https://bc-webapp-assets.nyc3.digitaloceanspaces.com/members/tylerw.JPG"
        }
      ]
  }

}
