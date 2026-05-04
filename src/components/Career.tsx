import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Application Developer</h4>
                <h5>Accenture</h5>
              </div>
              <h3>2025 - Now</h3>
            </div>
            <p>
              Driving backend architecture and AI-led automation for enterprise logistics systems. Led the transformation of legacy workflows into Agentic AI-driven solutions, reducing manual intervention and improving debugging efficiency. Established scalable event-driven communication (Amazon SNS/SQS) and optimized CI/CD pipelines to ensure reliable, high-frequency deployments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Systems Engineer</h4>
                <h5>Infosys</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              Owned critical backend services for a large-scale streaming platform, focusing on performance, scalability, and deployment efficiency. Introduced containerization strategies (Docker) and improved system reliability through optimized service design and streamlined release processes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Systems Engineer</h4>
                <h5>Infosys</h5>
              </div>
              <h3>2022-2023</h3>
            </div>
            <p>
              Engineered and scaled backend services within a microservices ecosystem, supporting high-traffic media platforms. Strengthened system performance through API design improvements and database optimization, contributing to faster response times and enhanced user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
