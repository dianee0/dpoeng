import "./skills.css"

const skillCategories = [
    { title: "Languages", items: ['Javascript', 'Python', 'HTML', 'CSS', 'C', 'C++'] },
    { title: "Frontend", items: ['React', 'Three.js', 'Bootstrap', 'Figma'] },
    { title: "Backend", items: ['Node.js', 'Firebase', 'SQLite', 'Valkey/Redis'] },
    { title: "Tools", items: ['Git', 'Linux', 'Docker', 'Google Cloud Vision API'] }
];

function Skills() {
    return (
        <div>
            <h1>Skills & Technolgies</h1>
            <div className='Cards'>
                {skillCategories.map((category) => (
                    <div className="card" key={category.title}>
                        <div className="container">
                            <h4><b>{category.title}</b></h4>
                                <hr className="card-separator"></hr>
                                {category.items.map((item) => (
                                    <div class='smallCard'>
                                        <p key={item}>{item}</p>
                                    </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Skills;
