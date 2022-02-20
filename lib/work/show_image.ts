import uhro_logo from '../../public/images/unicorn_logo.png';
import epson from '../../public/images/epson-logo.png';
import chat from '../../public/images/chat.png';
import exam from '../../public/images/exam.png';

type imgNameProps = (imgName: String) => StaticImageData;

export const showImage: imgNameProps = (imgName) => {
    switch (imgName) {
        case 'UHRO':
            return uhro_logo;
        case 'Epson':
            return epson;
        case 'Chat':
            return chat;
        case 'Exam':
            return exam;
        default:
            return uhro_logo;
    }
};