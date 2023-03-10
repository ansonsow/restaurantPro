let Attendance = require("../models/attendance");

/*---- RETURN ALL ATTENDANCE INFO ----*/
const getAttendance = (req, res) => {
  let attendanceDetails = Attendance.find().then((result) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).json(result);
  });
};

/*---- RETURN INFO BASED ON AN EMLOYEE'S ID ----*/
const getAttendee = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id = req.params.user_id;
  if (typeof id == "undefined") {
    Attendance.find({})
      .exec()
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } else {
    Attendance.find({ user_id: id })
      .exec()
      .then((results) => {
        if (results == null) {
          res.status(404).json(results);
        } else {
          res.status(200).json(results);
        }
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
};

/*---- RETURN INFO BASED ON CLOCK_IN TIME ----*/
let clockInList = [];
let yvrInTime = [];
const getClockIn = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  Attendance.find({}, { clock_in: 1 })
    .exec()
    .then((results) => {
      if (results == null) {
        res.status(404).json(results);
      } else {
        res.status(200).json(results);

        results.forEach((obj) => {
          clockInList.push(obj.clock_in);
        });

        clockInList.forEach((timeEach) => {
          let zulu = new Date(timeEach);
          let vancTime = zulu.toLocaleString("fr-CA", {
            timeZone: "America/Vancouver",
          });
          yvrInTime.push(vancTime);
        });

        clockInList.splice(0, clockInList.length, ...yvrInTime);
        yvrInTime = [];

        console.log(clockInList);
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

/*---- RETURN INFO BASED ON CLOCK_OUT TIME ----*/
let clockOutList = [];
let yvrOutTime = [];
const getClockOut = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  Attendance.find({}, { clock_out: 1 })
    .exec()
    .then((results) => {
      if (results == null) {
        res.status(404).json(results);
      } else {
        res.status(200).json(results);

        results.forEach((obj) => {
          clockOutList.push(obj.clock_out);
        });

        clockOutList.forEach((timeEach) => {
          let zulu = new Date(timeEach);
          let vancTime = zulu.toLocaleString("fr-CA", {
            timeZone: "America/Vancouver",
          });
          yvrOutTime.push(vancTime);
        });

        clockOutList.splice(0, clockOutList.length, ...yvrOutTime);
        yvrOutTime = [];

        console.log(clockOutList);
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

/*---- POST NEW ATTENDANCE ----*/
const saveAttendance = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let addAttendance = new Attendance(req.body);
  addAttendance
    .save()
    .then((result) => {
      res.status(201).json(addAttendance);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

const getLastAttendance = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const uid = req.params.uid;

  const attendance = await Attendance.find({ user_id: uid })
    .limit(1)
    .sort({ $natural: -1 });
  // console.log(attendance)
  // res.json(uid)
  if (attendance) {
    res.status(200).json(attendance);
  } else {
    res.status(404).json({ Message: "last attendance not found" });
  }
};

const updateClockOut = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const uid = req.params.uid;

  const attendance = await Attendance.findOne({ user_id: uid });
  attendance.clock_out = new Date(Date.now());
  attendance
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({ Message: error });
    });
};

const getUserByClockStatus = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  console.log(req.params);
  let employeeStatus = req.params.clock_status;
  const employees = await Attendance.find({ clock_status: employeeStatus })
    .exec()
    .then((employees) => {
      res.status(200).json(employees);
    })
    .catch((error) => {
      res.status(404).json({ Message: error });
    });
};

module.exports = {
  getAttendance,
  getAttendee,
  getClockIn,
  getClockOut,
  saveAttendance,
  getLastAttendance,
  updateClockOut,
  getUserByClockStatus,
};
