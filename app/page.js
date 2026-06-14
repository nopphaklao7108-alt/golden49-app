export default function Home() {
  function depositToBank() {
    alert('ธนาคารได้รับคำสั่งฝากแล้ว CEO');
  }

  return (
    <div style={{padding: '20px'}}>
      <h1>ธนาคาร LOT Pi Holding</h1>
      
      <button onclick="sellGold()">ขายเป็น Pi</button>
      
      {/* เริ่มธนาคาร V1 */}
      <button 
        id="depositBtn" 
        onclick={depositToBank}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '15px 30px',
          fontSize: '18px',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        ฝาก Pi เข้าธนาคาร LOT
      </button>
    </div>
  );
}
