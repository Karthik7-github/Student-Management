const CourseModel = require('../models/Courses.model');
const TimeTableModel = require('../models/Timetable.model');
const AnnouncementsModel = require('../models/Announcements.model');
const MessageModel = require('../models/Messages.model');
const ClubModel = require('../models/Clubs.model');
const ClubchatModel = require('../models/ClubChat.model');

//  Courses


async function CreateCourse(req, res) {

    const { Name, Code, Color, Link, Class } = req.body;

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
        'Message':"Club Message Created",
        Message:Clubchat
    })
}

async function GetClubchats(req,res) {
    const ClubMsgs = await ClubchatModel.find().sort({ _id: 1 });

    res.status(200).json({
        Message: "All Club Messages",
        Message: ClubMsgs
    });
}

module.exports = {
    CreateCourse, Getcourss, Createschedule, GetSchedule, CreateAnnouncements, GetAnnouncements,
    CreateMessage, GetMessages, CreateClub, GetClubs, RegisterMember, CreateClubmsg,GetClubchats
};