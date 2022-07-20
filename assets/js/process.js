
function activate(data) {
    $('.roadmap-slide').removeClass('active');
    $('.mentorBox').removeClass('show');
    if (data == 'mentor') {
        $('.mentor').addClass('active');
        $('.mentor .mentorBox').addClass('show');
    }
    if (data == 'personal') {
        $('.personal').addClass('active');
        $('.personal .mentorBox').addClass('show');
    }
    if (data == 'Goal') {
        $('.Goal').addClass('active');
        $('.Goal .mentorBox').addClass('show');
    }
    if (data == 'Fitment') {
        $('.Fitment').addClass('active');
        $('.Fitment .mentorBox').addClass('show');
    }
    if (data == 'Resume') {
        $('.Resume').addClass('active');
        $('.Resume .mentorBox').addClass('show');
    }
    if (data == 'Essay') {
        $('.Essay').addClass('active');
        $('.Essay .mentorBox').addClass('show');
    }
    if (data == 'Letters') {
        $('.Letters').addClass('active');
        $('.Letters .mentorBox').addClass('show');
    }
    if (data == 'Interview') {
        $('.Interview').addClass('active');
        $('.Interview .mentorBox').addClass('show');
    }
    if (data == 'scholarship') {
        $('.scholarship').addClass('active');
        $('.scholarship .mentorBox').addClass('show');
    }
}
$(window).load(function () {
    $('.mentor_matching').addClass('active');
    // alert('asdfasdf');
});

function process(data) {
    // alert(data);
    $('.card-header').removeClass('active');
    if (data == 'mentor_matching') {
        $('.mentor_matching').addClass('active');
    }
    if (data == 'Personal_Assesment') {
        $('.Personal_Assesment').addClass('active');
    }
    if (data == 'My_Resume') {
        $('.My_Resume').addClass('active');
    }
    if (data == 'Goal_Clarity') {
        $('.Goal_Clarity').addClass('active');
    }
    if (data == 'School_Fitment_Session') {
        $('.School_Fitment_Session').addClass('active');
    }
    if (data == 'Essay_Writing') {
        $('.Essay_Writing').addClass('active');
    }
    if (data == 'Letters_of_Recommendation') {
        $('.Letters_of_Recommendation').addClass('active');
    }
    if (data == 'Interview_Preparation') {
        $('.Interview_Preparation').addClass('active');
    }
    if (data == 'Scholarship_Post_Admission_Assistance') {
        $('.Scholarship_Post_Admission_Assistance').addClass('active');
    }
}

const testimonialArray = [
    {
        name: 'Chaitanya',
        avatar: 'images/testimonials/ChaitanyaReddy.jpg',
        logo: 'images/testimonials/Duke-University.png',
        desc: ` "I was really confused but the experts at Leverage Edu helped me define my career goals and pick ideal courses. With their professionalism and guidance, I made it to Duke University. Its an excellent consultancy, I'm super stoked." `
    },
    {
        name: 'Siddharth',
        avatar: 'images/testimonials/siddhartha_agarwal.jpg',
        logo: 'images/testimonials/insead.jpg',
        desc: ` "ISB was my only B-school of choice and I was very stressed about getting in. Multiple peers, same answer: Leverage Edu. Hours of introspection, guidance, rigorous interview prep sessions and yes, even mentorship; everything I found exhausting was simplified. I made it to the right places twice, first being Leverage Edu and second, the dream, ISB." `
    },
    {
        name: 'Ishita',
        avatar: 'images/testimonials/Ishita.png',
        logo: 'images/testimonials/university-of-oxford.png',
        desc: ' "Right from the brainstorming sessions to the interview preparation, I received remarkable support from the best mentors. The entire team is extremely talented, supportive and professional. The support that I received from Leverage Edu didn’t just end with my selection into my target school but continued throughout the loan and visa processes. Leverage Edu has been an all-inclusive solution for my career-needs and I strongly recommend their services."',
    },
    {
        name: 'Divya',
        avatar: 'images/testimonials/Divya.jpg',
        logo: 'images/testimonials/university-of-cambridge.png',
        desc: ' "Leverage Edu is a place where young energy and innovation meets expertise. The kind of ownership my head coaches and team at Leverage Edu had was immense. They were just as worried about my application as I was, that’s pretty rare. I was managed in a unique manner and was given a customised approach. I wasn’t around consultants but really smart friends. This experience will always be unparalleled, getting into Cambridge feels like fuzzy magic."',
    },
    {
        name: 'Neha',
        avatar: 'images/testimonials/NehaShivpurkar.jpg',
        logo: 'images/testimonials/NehaShivpurkarUniv.svg',
        desc: ' "I want to thank Leverage Edu for my admit to a Top 20 B-School program with a Forte Fellowship. My mentor was deeply invested in my progress and provided me with a strong support system throughout the journey. Going above and beyond to help achieve career goals is something Leverage Edu strongly stands for!"',
    },
    {
        name: 'Gauri',
        avatar: 'images/testimonials/GauriMathur.jpg',
        logo: 'images/testimonials/Purdue.png',
        desc:  `"I went to Leverage Edu in October 2019 wanting a Fall 2020 admit for a Masters in US. For this, I had to take my GRE by December & honestly I was already extremely late to start my prep. So I decided to sign up for the GRE coaching by Leverage Edu itself. The faculty & my Head Coach worked with me constantly for the next two months to help me complete my prep. They helped me in various ways from online classes, study material, weekly progress meetings to scheduling classes around my convenience. This was very helpful and I ended up with a decent score. Next, they helped me optimise my college selection strategy according to the course I wanted to pursue while keeping my GRE & TOEFL score in mind. Once this was done, the team at Leverage Edu assisted me with refining my SOPs , LORs and application essays. I was able to get admits in 3 out 4 colleges I applied to, two of them being Purdue University & USC Marshall. Their team even helped me decide which college to finalise based on tuition fees and other financial parameters.

        Although I have planned to defer my 2020 admits to 2021, owing to the Covid situation, the team at Leverage Edu is helping me re-strategise for Fall 2021. Overall the experience has been good. Leverage Edu helps with showing you the right direction, of course there is some level of work you need to do yourself, but at least you know that there are experts who have done this for a long time there to guide you."`,
    },
    {
        name: 'Sheel',
        avatar: 'images/testimonials/SheelChaubey.jpeg',
        logo: 'images/testimonials/Wharton-university-of-pennsylvania.png',
        desc:  ' "They go far beyond the ordinary, invest in you and become your confidantes and mentors. The one thing that stood out for me at Leverage Edu was the myriad of different resources they have put together. The GMAT coaches, essay evaluators, resume specialists are all top class." ',
    },
    {
        name: 'Mokshada',
        avatar: 'images/testimonials/Mokshada Wanchoo.jpeg',
        logo: 'images/testimonials/insead.png',
        desc:  ' "From day one my mentors were extremely encouraging and had a lot more confidence in my candidature than I did myself. While they brought out the best in me through my application, they also ensured that it stayed 100% true to who I was. I will be joining the Class of 2020 at INSEAD, the third highest ranked B-School in the world with a Scholarship worth Rs. 15 lacs. Huge thanks to Leverage Edu for their guidance and encouragement!" ',
    },
    {
        name: 'Saransh',
        avatar: 'images/testimonials/Saransh.jpeg',
        logo: 'images/testimonials/University_of_sheffield.png',
        desc:  ' "Education abroad was an alien idea to me and hence I was really confused about how to make the right choice. I was neither aware about the best options for me nor did I have an understanding about the process for education abroad, but after my first meeting with Leverage Edu, I had it all clear as they lead me to the right path and provided me assistance for the same. They guided me towards the right colleges for me, helped me write my Statement of Intent and likewise handheld me every step of the way."',
    },
];

function openTestimonial(data) {
    // console.log(testimonialArray[data - 1], ' testimonial of');
    let testimonial = testimonialArray[data - 1];
    $('#popupTestimonialModel .img-circle').attr("src", testimonial.avatar);
    $('#popupTestimonialModel .name').html(testimonial.name);
    $('#popupTestimonialModel .logo').attr('src', testimonial.logo);
    $('#popupTestimonialModel .desc').html(testimonial.desc);
}