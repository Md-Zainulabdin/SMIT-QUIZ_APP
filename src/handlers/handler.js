import { compare, hash } from 'bcryptjs';
import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), "src", "data", "db.json");

// Get Data Form Local Database..

export const getData = () => {
    let data = JSON.parse(fs.readFileSync(filePath));
    return data;
}

// Set Data to Local Database..

export const setData = async ({ username, email, password }) => {
    let users = getData();
    let isFound = Boolean(verifyEmail(email));

    if (isFound) {
        console.log("User already exists");
        return;
    }

    const hashedPassword = await hash(password, 12)

    users.push({
        id: users.length + 1,
        username,
        email,
        password: hashedPassword,
    });

    fs.writeFileSync(filePath, JSON.stringify(users));

}

// Check email to verify the user is already exist or not

export const verifyEmail = (email) => {
    let users = getData();
    return users.find(user => user.email.toLowerCase() === email.toLowerCase());
}

// verify user given password

export const verifyPassword = async (hashedPassword, password) => {
    let isFound = await compare(password, hashedPassword);
    return isFound;
} 

// Get Data to render Quiz

const quizFilePath = path.join(process.cwd(), 'src', 'data', 'quiz.json');

export const getQuizData = () => {
    let data = JSON.parse(fs.readFileSync(quizFilePath));
    return data;
}