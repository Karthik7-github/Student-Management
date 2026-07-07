const CourseModel = require('../models/Courses.model');
const TimeTableModel = require('../models/Timetable.model');
const AnnouncementsModel = require('../models/Announcements.model');
const MessageModel = require('../models/Messages.model');
const ClubModel = require('../models/Clubs.model');
const ClubchatModel = require('../models/ClubChat.model');
const ClubFaqsModel = require('../models/ClubFaq.model.js');
const ResultModel = require('../models/Results.model.js');
const ClubNotification = require('../models/ClubNotifications.model.js');
const AttendanceModel = require('../models/Attendance.model.js');
const FeesModel = require("../models/Fees.model.js");
const TeacherTable = require("../models/TeacherTimeTable.model.js");
const TeacherTableModel = require('../models/TeacherTimeTable.model.js');


//  Courses

async function CreateCourse(req, res) {

    const { Name, Code, Link, Class } = req.body;

    const Color1 = [
        '#FF3CAC', // neon pink
        '#784BA0', // rich purple
        '#2B86C5', // bright blue
        '#00F5D4', // aqua neon
        '#F15BB5', // candy pink
        '#FEE440', // glowing yellow
        '#00BBF9', // sky neon blue
        '#9B5DE5', // electric violet
        '#00F260', // neon green
        '#FF9F1C', // bright orange
        '#FF4D6D', // hot red pink
        '#3A86FF', // strong blue
        '#8338EC', // deep neon purple
        '#06D6A0', // mint neon
        '#FFBE0B'  // golden glow
    ];
    const Color = Color1[Math.floor(Math.random() * Color1.length)];

    const Course = await CourseModel.create({
        Name, Code, Color, Link, Class
    });

    res.status(201).json({
        'Message': "Course Created",
        Course: Course
    });
}

async function Getcourss(req, res) {
    const Courses = await CourseModel.find().sort({ Name: 1 });

    res.status(200).json({
        'Message': "Get All Courses",
        Course: Courses
    })
}

async function Removecourse(req, res) {
    try {
        const { Code, Class } = req.body;

        const course = await CourseModel.findOneAndDelete({ Code, Class });

        if (!course) {
            return res.status(404).json({
                Message: "Course not found"
            });
        }

        res.status(200).json({
            Message: "Course removed successfully",
            Course: course
        });

    } catch (err) {
        res.status(500).json({
            Message: "Error removing course",
            Error: err.message
        });
    }
}

//   Time tables

async function Createschedule(req, res) {

    const { Grade, Schedule } = req.body;

    const TimeTable = await TimeTableModel.create({
        Grade, Schedule
    });

    res.status(201).json({
        'Message': " Time Table Created Successfully",
        Timetable: TimeTable
    })
}

async function GetSchedule(req, res) {
    const Shedule = await TimeTableModel.find();

    res.status(200).json({
        'Message': "Time Table",
        Timetable: Shedule
    })
}

// Announcements

async function CreateAnnouncements(req, res) {
    const { Title, Content, Author, Grade } = req.body;

    const Color1 = [
        '#FF3CAC', // neon pink
        '#784BA0', // rich purple
        '#2B86C5', // bright blue
        '#00F5D4', // aqua neon
        '#F15BB5', // candy pink
        '#FEE440', // glowing yellow
        '#00BBF9', // sky neon blue
        '#9B5DE5', // electric violet
        '#00F260', // neon green
        '#FF9F1C', // bright orange
        '#FF4D6D', // hot red pink
        '#3A86FF', // strong blue
        '#8338EC', // deep neon purple
        '#06D6A0', // mint neon
        '#FFBE0B'  // golden glow
    ];

    const Color = Color1[Math.floor(Math.random() * Color1.length)];

    const Announcements = await AnnouncementsModel.create({
        Title, Content, Author, Grade, Color
    });

    res.status(201).json({
        'Message': " Announcements Created",
        Announcements: Announcements
    })
}

async function GetAnnouncements(req, res) {

    const Announcement = await AnnouncementsModel.find().sort({ _id: -1 });

    res.status(200).json({
        'Message': "Announcements",
        Announcements: Announcement
    })
}

// Messages

async function CreateMessage(req, res) {

    const { SenderID, ReceiverID, Message } = req.body;

    const Color1 = [
        '#FF3CAC', // neon pink
        '#784BA0', // rich purple
        '#2B86C5', // bright blue
        '#00F5D4', // aqua neon
        '#F15BB5', // candy pink
        '#FEE440', // glowing yellow
        '#00BBF9', // sky neon blue
        '#9B5DE5', // electric violet
        '#00F260', // neon green
        '#FF9F1C', // bright orange
        '#FF4D6D', // hot red pink
        '#3A86FF', // strong blue
        '#8338EC', // deep neon purple
        '#06D6A0', // mint neon
        '#FFBE0B'  // golden glow
    ];

    const Color = Color1[Math.floor(Math.random() * Color1.length)];

    const Messages = await MessageModel.create({
        SenderID, ReceiverID, Message, Color
    });

    res.status(201).json({
        'Message': "MSG Created",
        Message: Messages
    })
}

async function GetMessages(req, res) {

    const Messages = await MessageModel.find().sort({ _id: 1 });

    res.status(200).json({
        'Message': "All Messages",
        Message: Messages
    })
}

// Clubs

async function CreateClub(req, res) {

    const Color1 = [
        '#FF3CAC', // neon pink
        '#784BA0', // rich purple
        '#2B86C5', // bright blue
        '#00F5D4', // aqua neon
        '#F15BB5', // candy pink
        '#FEE440', // glowing yellow
        '#00BBF9', // sky neon blue
        '#9B5DE5', // electric violet
        '#00F260', // neon green
        '#FF9F1C', // bright orange
        '#FF4D6D', // hot red pink
        '#3A86FF', // strong blue
        '#8338EC', // deep neon purple
        '#06D6A0', // mint neon
        '#FFBE0B'  // golden glow
    ];

    const Color = Color1[Math.floor(Math.random() * Color1.length)];
    const Colortwo = Color1[Math.floor(Math.random() * Color1.length)];
    const Colorthree = Color1[Math.floor(Math.random() * Color1.length)];

    const { ClubName, ClubCode, ClubID, TypeofClub, ClubIncharge, ClubLeader, Link, Email, Description, Members, NotificationView, Events, Awards } = req.body;

    const Club = await ClubModel.create({
        ClubName, ClubCode, ClubID, TypeofClub, ClubIncharge, ClubLeader, Link, Email, Description, Members, Color, Colortwo, Colorthree, NotificationView, Events, Awards
    })

    res.status(201).json({
        'Message': "Club Created",
        Club: Club
    })
}

async function GetClubs(req, res) {
    const Club = await ClubModel.find();

    res.status(200).json({
        'Message': "All Clubs",
        Club: Club
    })
}

async function RegisterMember(req, res) {

    try {
        const id = req.params.id;
        const { MemberName } = req.body;

        const updatedClub = await ClubModel.findByIdAndUpdate(
            id,
            {
                $addToSet: {
                    Members: { MemberName }
                },
            },
            { new: true }
        );

        res.status(200).json(updatedClub);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function LeftClub(req, res) {
    try {
        const id = req.params.id;
        const { MemberName } = req.body;

        const updatedClub = await ClubModel.findByIdAndUpdate(
            id,
            {
                $pull: {
                    Members: { MemberName: MemberName }
                }
            },
            { new: true }
        );

        res.status(200).json(updatedClub);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

//  Club Chats 

async function CreateClubmsg(req, res) {

    const { ClubID, MemberName, Message } = req.body;

    const Color1 = [
        '#FF3CAC', // neon pink
        '#784BA0', // rich purple
        '#2B86C5', // bright blue
        '#00F5D4', // aqua neon
        '#F15BB5', // candy pink
        '#FEE440', // glowing yellow
        '#00BBF9', // sky neon blue
        '#9B5DE5', // electric violet
        '#00F260', // neon green
        '#FF9F1C', // bright orange
        '#FF4D6D', // hot red pink
        '#3A86FF', // strong blue
        '#8338EC', // deep neon purple
        '#06D6A0', // mint neon
        '#FFBE0B'  // golden glow
    ];

    const Color = Color1[Math.floor(Math.random() * Color1.length)];

    const Clubchat = await ClubchatModel.create({
        ClubID, MemberName, Message, Color
    })

    res.status(201).json({
        'Message': "Club Message Created",
        Message: Clubchat
    })
}

async function GetClubchats(req, res) {
    const ClubMsgs = await ClubchatModel.find().sort({ _id: 1 });

    res.status(200).json({
        Message: "All Club Messages",
        Message: ClubMsgs
    });
}

// Club FAQS

async function CreateClubFaqs(req, res) {

    const { ClubID, MemberName, Question, Answer } = req.body;

    const Color1 = [
        '#FF3CAC', // neon pink
        '#784BA0', // rich purple
        '#2B86C5', // bright blue
        '#00F5D4', // aqua neon
        '#F15BB5', // candy pink
        '#FEE440', // glowing yellow
        '#00BBF9', // sky neon blue
        '#9B5DE5', // electric violet
        '#00F260', // neon green
        '#FF9F1C', // bright orange
        '#FF4D6D', // hot red pink
        '#3A86FF', // strong blue
        '#8338EC', // deep neon purple
        '#06D6A0', // mint neon
        '#FFBE0B'  // golden glow
    ];

    const Color = Color1[Math.floor(Math.random() * Color1.length)];

    const ClubFAQS = await ClubFaqsModel.create({
        ClubID, MemberName, Question, Answer, Color
    });

    res.status(201).json({
        'Message': "Created FAQS",
        ClubFaq: ClubFAQS
    })
}

async function GetClubFaqs(req, res) {
    const ClubFAQS = await ClubFaqsModel.find().sort({ _id: 1 });

    res.status(200).json({
        'Message': "ALL Club FAQS",
        ClubFaq: ClubFAQS
    })
}

// Results

async function CreateResult(req, res) {

    const { UserID, Sem, Subjects } = req.body;

    const Result = await ResultModel.create({
        UserID, Sem, Subjects
    });

    res.status(201).json({
        'Message': "Result Created",
        Result: Result
    });
}

async function GetResult(req, res) {
    const Result = await ResultModel.find();

    res.status(200).json({
        'Message': "Results",
        Result: Result
    })
}

// Club Notifications 

async function CreateClubnot(req, res) {

    const { ClubID, EventName, Description, Time } = req.body;


    const Color1 = [
        '#FF3CAC', // neon pink
        '#784BA0', // rich purple
        '#2B86C5', // bright blue
        '#00F5D4', // aqua neon
        '#F15BB5', // candy pink
        '#FEE440', // glowing yellow
        '#00BBF9', // sky neon blue
        '#9B5DE5', // electric violet
        '#00F260', // neon green
        '#FF9F1C', // bright orange
        '#FF4D6D', // hot red pink
        '#3A86FF', // strong blue
        '#8338EC', // deep neon purple
        '#06D6A0', // mint neon
        '#FFBE0B'  // golden glow
    ];
    const Color = Color1[Math.floor(Math.random() * Color1.length)];

    const Notification = await ClubNotification.create({
        ClubID, EventName, Description, Time, Color
    });

    res.status(200).json({
        'Message': "Club Notification Created",
        Notification: Notification
    })
}

async function GetClubNots(req, res) {
    const Notification = await ClubNotification.find();

    res.status(200).json({
        'Message': "All Clubs Notifications",
        Notification: Notification
    })
}

// Attendance

async function PostAttendance(req, res) {
    const { ID, Present, Total } = req.body;

    const Attendance = await AttendanceModel.create({
        ID, Present, Total
    });

    res.status(201).json({
        Message: "Attendance Posted",
        Attendance: Attendance
    });
}

async function GetAttendance(req, res) {
    const Attendance = await AttendanceModel.find();

    res.status(200).json({
        Message: "Attendace fetched",
        Attendance: Attendance
    })
}

//  Fees 

async function Createreceipt(req, res) {
    const { MemberName, MemberID, Amount, Date, Receiptent } = req.body;

    const Color1 = [
        '#FF3CAC', // neon pink
        '#784BA0', // rich purple
        '#2B86C5', // bright blue
        '#00F5D4', // aqua neon
        '#F15BB5', // candy pink
        '#FEE440', // glowing yellow
        '#00BBF9', // sky neon blue
        '#9B5DE5', // electric violet
        '#00F260', // neon green
        '#FF9F1C', // bright orange
        '#FF4D6D', // hot red pink
        '#3A86FF', // strong blue
        '#8338EC', // deep neon purple
        '#06D6A0', // mint neon
        '#FFBE0B'  // golden glow
    ];

    const Color = Color1[Math.floor(Math.random() * Color1.length)];

    const Receipt = await FeesModel.create({
        MemberName, MemberID, Amount, Date, Receiptent, Color
    });

    res.status(201).json({
        Message: 'Receipt Created',
        Receipt: Receipt
    })
}

async function Getreceipts(req, res) {
    const Receipt = await FeesModel.find();

    res.status(200).json({
        Message: "Fetched all Receipts",
        Receipt: Receipt
    })
}

// Teacher Time Tables

async function TeacherCreateschedule(req, res) {

    const { ID, Grade, Schedule } = req.body;

    const TimeTable = await TeacherTableModel.create({
        ID, Grade, Schedule
    });

    res.status(201).json({
        'Message': " Time Table Created Successfully",
        Timetable: TimeTable
    })
}

async function TeacherGetSchedule(req, res) {
    const Shedule = await TeacherTableModel.find();

    res.status(200).json({
        'Message': "Time Table",
        Timetable: Shedule
    })
}

module.exports = {
    CreateCourse, Getcourss, Createschedule, GetSchedule, CreateAnnouncements, GetAnnouncements,
    CreateMessage, GetMessages, CreateClub, GetClubs, RegisterMember, CreateClubmsg, GetClubchats,
    CreateClubFaqs, GetClubFaqs, LeftClub, CreateResult, GetResult, CreateClubnot, GetClubNots,
    PostAttendance, GetAttendance, Removecourse, Createreceipt, Getreceipts, TeacherCreateschedule, TeacherGetSchedule
};