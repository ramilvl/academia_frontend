import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import "../styles/materialOptions.scss";

interface Material {
  id: number;
  title: string;
}

interface Topic {
  id: number;
  materials: Material[];
}

interface Course {
  id: number;
  title: string;
  topics: Topic[];
}

const MaterialOptions: React.FC = () => {
  const { courseId, materialId } = useParams<{ courseId: string; materialId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [course, setCourse] = useState<Course | null>(null);
  const [material, setMaterial] = useState<Material | null>(null);

  useEffect(() => {
    const fetchMaterial = async () => {
      const res = await axios.get("http://localhost:8080/v1/course");
      const allCourses: Course[] = res.data.data.content;
      const foundCourse = allCourses.find((c) => c.id === Number(courseId));
      if (!foundCourse) return;

      setCourse(foundCourse);

      for (const topic of foundCourse.topics) {
        const mat = topic.materials.find((m) => m.id === Number(materialId));
        if (mat) setMaterial(mat);
      }
    };

    fetchMaterial();
  }, [courseId, materialId]);

  if (!course || !material) return <div className="material-error">Material tapılmadı</div>;



  return (
    <div className="material-container">
      <div className="material-header-new">
        <Link to={`/courses/${courseId}`} className="back-link">← Geri</Link>
        <h2 className="material-topic-title">Mövzu: {material.title}</h2>
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo atque reprehenderit odit id, deserunt tempora est fugiat similique officia, temporibus deleniti nesciunt repellendus recusandae officiis harum dolore non debitis corporis maiores possimus ipsam! Qui ex, alias dicta deleniti temporibus enim laborum optio corrupti magnam mollitia quaerat amet, quasi quas, laboriosam deserunt nostrum non id quidem doloribus rerum? Tempora voluptatibus est obcaecati voluptatum enim laudantium libero explicabo veritatis molestiae, nostrum consectetur earum dolores tempore cum commodi velit fuga quidem sit rerum mollitia blanditiis quas? Veritatis quod, aspernatur aliquid temporibus cumque ullam officiis repellat fuga iusto nesciunt possimus obcaecati, fugit laborum atque odit cum amet optio quaerat? Adipisci nisi nesciunt architecto pariatur commodi magni expedita. Temporibus voluptate, ipsum sunt consequuntur, iusto impedit tempore fugiat cum aut aliquid voluptas magnam quaerat itaque repudiandae nulla. Quidem possimus iste eum, dolorem aliquid facere asperiores ratione nam deserunt vel impedit, qui dolore laborum. Ipsa quae consequuntur velit commodi sequi voluptatibus ad accusantium vitae molestias delectus ut quis, eos rerum aspernatur in fugit alias exercitationem nisi molestiae nostrum eius ipsam. Explicabo quam quibusdam earum, error beatae magni tempore, laboriosam minus fugit quaerat atque, facilis sapiente nulla ea. Vitae neque adipisci ullam sapiente aut error quam earum iusto ab enim eligendi aperiam velit vero in optio impedit nihil illo rem, dolores tenetur quis deserunt aliquid recusandae accusantium? Eos vero voluptatem amet, minima expedita dolorem error temporibus nisi labore officiis velit animi accusantium adipisci libero at quo inventore placeat modi, doloribus odit, deleniti dicta. Eaque, vitae quam? Laboriosam earum exercitationem rem modi vitae porro eum accusamus dignissimos facere minima enim magnam et voluptate corporis, quos aspernatur odio commodi? At numquam nostrum saepe eum, consequuntur molestiae libero illo est, et veniam, qui quasi amet ad tempora cumque delectus necessitatibus animi. Accusantium esse aperiam fugiat, odio reiciendis, consequuntur, eaque eius ipsa odit quia suscipit tenetur vel iusto maiores iure. Possimus doloribus laborum, velit atque aliquid magnam fuga non molestiae animi voluptate unde assumenda, hic voluptas architecto iste aut cum. Suscipit, possimus ut voluptatem aliquid similique incidunt quam harum voluptate inventore nihil magnam velit eius, iste quasi quae iure! Necessitatibus, dolorem ducimus impedit possimus numquam velit molestiae reprehenderit inventore illum provident commodi distinctio asperiores maiores sunt at tenetur, cupiditate aliquid quia odit et corrupti. Expedita aliquam cum velit, quasi ipsum, aperiam eveniet officia commodi nihil, provident nisi libero rem laboriosam! Cumque error minima natus odio obcaecati quam aspernatur doloribus veritatis excepturi ipsam aperiam officiis, harum dolorem odit consequatur corporis rerum tenetur provident non ducimus ex. Aperiam soluta fugit fugiat illum sunt, voluptate, facilis excepturi debitis quasi nemo amet nihil a dignissimos inventore omnis porro? Tempora totam ex dicta consequatur incidunt, doloribus id excepturi officia sunt tempore veritatis quidem quas dolore voluptas quasi amet minima nisi perspiciatis! Atque excepturi accusamus esse cumque, aliquam quaerat eos corrupti nisi! Fugit fuga placeat quidem inventore reprehenderit magni doloribus distinctio sapiente, magnam temporibus amet optio labore deleniti veniam earum neque explicabo molestiae autem repudiandae aperiam consequuntur facere cum non. Beatae sapiente eius delectus eligendi facere mollitia impedit!
      </div>

      {/* <div className="material-nav-tabs" role="tablist">
        {tabs.map(({ label, path }) => {
          const isActive = location.pathname.includes(path);
          return (
            <div
              key={path}
              className={`tab-item ${isActive ? "active" : ""}`}
              onClick={() => navigate(`/course/${courseId}/material/${materialId}/${path}`)}
              role="tab"
              aria-selected={isActive}
            >
              {label}
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default MaterialOptions;
