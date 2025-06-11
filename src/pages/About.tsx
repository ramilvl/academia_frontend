import "../styles/about.scss";
import { FaBookOpen, FaUserAlt, FaBrain } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Kurs Platforması</h1>
        <p>Öyrən, test et və AI ilə biliklərini dərinləşdir!</p>
      </div>

      <div className="about-section">
        <FaBookOpen className="about-icon" />
        <h2>Layihə Haqqında</h2>
        <p>
          Bu platforma React, TypeScript və SCSS ilə hazırlanmış interaktiv kurs sistemidir.
          Məqsəd — istifadəçilərə rahat şəkildə dərsləri öyrətmək və suallarla biliyi test etməkdir.
        </p>
      </div>

      <div className="about-section">
        <FaBrain className="about-icon" />
        <h2>GPT Dəstəyi</h2>
        <p>
          Sualların cavabları üçün AI (GPT) ilə izahlar avtomatik yaradılır. Beləliklə istifadəçi sadəcə öyrənmir,
          həm də dərin başa düşür.
        </p>
      </div>

      <div className="about-section">
        <FaUserAlt className="about-icon" />
        <h2>Müəllif</h2>
        <p>
          Bu layihə Ramil Valiyev tərəfindən frontend bacarıqlarını inkişaf etdirmək və real dünya təcrübəsi
          qazanmaq məqsədilə hazırlanıb.
        </p>
      </div>
    </div>
  );
};

export default About;
