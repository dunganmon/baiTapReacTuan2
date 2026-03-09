
export default function MemberCard({name,position,status,points,onAwardPoints}) {
    const isActive = status === "Active";
    const borderColor = isActive ? "green" : "red";
    const badgeColor = isActive ? "green" : "red";
    return(
        <div style={{
            border: `3px solid ${borderColor}`,
            borderRadius: "10px",
            padding: "15px",
            margin: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            background: "#f5f5f5",
            minWidth: "330px"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                
                }}>
                <h3>{name}</h3>
                <span style={{
                    backgroundColor: badgeColor,
                    height: "fit-content",
                    borderRadius: "15px",
                    color: "white",
                    marginLeft: "auto",
                    padding: "7px 9px",
                    fontSize: "13px",
                    fontWeight: "bold"
                }}>
                    {status}
                </span>
            </div>
            <p style={{textAlign: "center"}}><strong>Chức vụ:</strong> {position}</p>
            <div style={{
                background: "#ffffff",
                fontSize: "20px",
                textAlign: "center",
                padding: "9px",
                borderRadius: "9px",
                fontWeight: "bold"
            }}>
                {points} Điểm
            </div>
            <button
                onClick={onAwardPoints}
                style={{
                    width: "100%",
                    marginTop: "13px",
                    backgroundColor: "blue",
                    color: "white",
                    padding: "10px",
                    border: "none",
                    borderRadius: "9px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
                >
                Tặng 5 điểm thưởng 
            </button>
        </div>
    );

};
