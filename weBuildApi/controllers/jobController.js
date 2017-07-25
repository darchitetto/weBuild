import Job from '../models/jobModel.js';

module.exports = {
    getJobs : (request, response) =>{
        Job.find(function(err, jobs) {
            if (err) {
                console.log('error:', err)
                response.send(err);
            }

            response.json(jobs);
        }).sort({createDate: 'desc'});
    },
    saveJobs : (request, response) => {
        let job = new Job();

        job.name = request.body.name;
        job.contractor = request.body.contractor;
        job.duration = request.body.duration;
        job.category = request.body.category;
        job.startDate = request.body.startDate;
        job.jobNumber = request.body.jobNumber;
        job.createDate = new Date();

        job.save(function(err) {
            if (err) {
                response.send(err);
            }

            response.json({ message: 'Job created!' });
        });
    },
    getJob : (req, res) => {
        //do something
    }
}