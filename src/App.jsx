import { useState } from "react";
import MemberCard from "./components/MemberCard";

export default function App() {
  const [members, setMembers] = useState([
    { id: 1, name: "Nguyễn Văn A", position: "Frontend Developer", status: "Active", points: 100 },
    { id: 2, name: "Trần Thị B", position: "Backend Developer", status: "Active", points: 85 },
    { id: 3, name: "Lê Văn C", position: "UI/UX Designer", status: "Active", points: 120 },
    { id: 4, name: "Phạm Thị D", position: "Project Manager", status: "Inactive", points: 60 },
    { id: 5, name: "Hoàng Văn E", position: "QA Tester", status: "Active", points: 95 },
    { id: 6, name: "Vũ Thị F", position: "DevOps Engineer", status: "Inactive", points: 50 },
  ]);
  
  const [filterStatus, setFilterStatus] = useState("All");
  const activeCount = members.filter(m => m.status === "Active").length;
  const inactiveCount = members.filter(m => m.status === "Inactive").length;
  const totalPoints = members.reduce((sum, m) => sum + m.points, 0);

  const filteredMembers = members.filter(m => {
    if (filterStatus === "All") return true;
    return m.status === filterStatus;
  });

  const handleAwardPoints = (id) => {
    const newMembers = members.map(m => 
      m.id === id ? { ...m, points: m.points + 5 } : m
    );
    setMembers(newMembers);
  };

  return (
    <div style={{background: "#f5f5f5",display: "flex", flexDirection : "column", justifyContent: "center", alignItems: "center", padding: "20px", fontFamily: "Arial", textAlign: "center", margin: "0 auto", width: "100%" }}>
      

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px", color: "white", width: "75%"}}>
        <div style={{ flex: 1, padding: "30px 20px", background: "green", borderRadius: "8px"}}>
          Đang hoạt động: <br></br><strong style={{fontSize: "40px"}}>{activeCount}</strong>
        </div>
        <div style={{ flex: 1, padding: "30px 20px", background: "red", borderRadius: "8px" }}>
          Không hoạt động: <br></br><strong style={{fontSize: "40px"}}>{inactiveCount}</strong>
        </div>
        <div style={{ flex: 1, padding: "30px 20px", background: "blue", borderRadius: "8px" }}>
          Tổng điểm: <br></br><strong style={{fontSize: "40px"}}>{totalPoints}</strong>
        </div>
      </div>
   
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilterStatus("All")}>Tất cả</button>
        <button onClick={() => setFilterStatus("Active")} style={{ margin: "0 10px" }}>Active</button>
        <button onClick={() => setFilterStatus("Inactive")}>Inactive</button>
      </div>
      <h3 style={{textAlign: "center"}}>Danh sách thành viên:</h3>
      

      <div style={{
        display: "flex",
        maxWidth: "1280px",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {filteredMembers.map(member => (
          <MemberCard
            key={member.id}
            {...member}
            onAwardPoints={() => handleAwardPoints(member.id)} 
          />
        ))}
      </div>
    </div>
  );
  
};