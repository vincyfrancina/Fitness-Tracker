// routes.js
const express = require('express');
const {logup} = require('./Modals/Schema.js');
const {ProfileDetails} = require('./Modals/Profile.js');
const {WorkoutDetails} = require('./Modals/Workout.js');
const {Dashboard} = require('./Modals/Dashboard.js');
const router = express.Router();


router.post('/signup', async (request, response) => {
    try {
        console.log(request.body)
        const signup = new logup(
            {
                "name":request.body.name,
                "email":request.body.email,
                "password":request.body.password,
                "birthdate":request.body.birthdate,
                "gender":request.body.gender,
                "country":request.body.country
            }
        );
        await signup.save();
        console.log('User signed up:', signup);
        response.json(signup);
    } catch (error) {
        console.error('Sign-up failed:', error);
        response.status(500).json({ error: error.message }); // Return the error message
    }
    
});

router.post('/login', async (request, response) => { 
    try {
        console.log(request.body);
        const login = await logup.findOne({ 
            "email": request.body.email
        });
        if (login.password === request.body.password) {
            console.log('User logged in:', login);
            response.json({ message: 'Login successful' });
        } else {
            console.log('Login failed: Invalid email or password');
            response.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.log('Login failed:', error);
        response.status(500).json({ error: error.message }); 
    }
});

router.get('/Getweights', async (request, response) => {
    try {
        console.log(request.body)
        const profile = await ProfileDetails.find();

        console.log('ProfileDetails signed up:', profile[0]);
        response.json({weight: profile[0].weight});
    } catch (error) {
        console.error('Sign-up failed:', error);
        response.status(500).json({ error: error.message }); // Return the error message
    }
    
});

router.post("/getActivities", async(req,res)=>{
    const {month} = req.body;
    const month_activities = await Dashboard.find({month: month})
    console.log(month_activities)

    res.json({activities: month_activities});
})


router.post("/postActivities", async (req, res) => {
    const { month, date, duration, activity, calorie } = req.body;
    try {
        const month_activities = await Dashboard.findOne({ month: month, day: date });

        if (!month_activities) {
            await Dashboard.updateOne(
                { month: month, day: date },
                {
                    $set: {
                        month: month,
                        day: date,
                    },
                    $push: {
                        activities: {
                            duration: duration,
                            activity: activity,
                            calorie: calorie,
                        },
                    },
                },
                { upsert: true }
            );
        } else {
            await Dashboard.updateOne(
                { month: month, day: date },
                {
                    $push: {
                        activities: {
                            duration: duration,
                            activity: activity,
                            calorie: calorie,
                        },
                    },
                }
            );
        }
        res.json({ status: "true", message: "Activity added successfully." });
    } catch (e) {
        console.log("error: " + e.message);
        res.status(500).json({ status: "false", message: "Internal Server Error" });
    }
});




router.post('/ProfileForm', async (request, response) => {
    try {
        console.log(request.body)
        const Profile = new ProfileDetails(
            {
                "weight":request.body.weight,
                "heightFeet":request.body.heightFeet,
                "city":request.body.city,
                "state":request.body.state,
                "pincode":request.body.pincode,
                "location":request.body.location
            }
        );
        await Profile.save();
        console.log('ProfileDetails signed up:', Profile);
        response.json(Profile);
    } catch (error) {
        console.error('Sign-up failed:', error);
        response.status(500).json({ error: error.message }); // Return the error message
    }
    
});



router.post('/WorkOut1', async (request, response) => {
    try {
        console.log(request.body)
        const WorkOut = new WorkoutDetails(
            {
                "activity":request.body.activity,
                "startTime":request.body.startTime,
                "endTime":request.body.endTime,
                "selectedDate":request.body.selectedDate,
                "caloriesBurned":request.body.caloriesBurned
            }
        );
        await WorkOut.save();
        console.log('WorkoutDetails signed up:', WorkOut);
        response.json(WorkOut);
    } catch (error) {
        console.error('WorkoutDetails unsigned-up failed:', error);
        response.status(500).json({ error: error.message }); // Return the error message
    }
    
});


module.exports = router;
