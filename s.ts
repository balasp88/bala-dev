class Person {

    name: String;
    passion: String;
    hobby: Array<String>;
    contact: Object;

    constructor() {
        this.name = "Bala Subramaniam";
        this.passion = "Web & Hybrid Mobile App Development";
        this.hobby = ["Gaming", "Movies"];
        this.contact = { 
            email: "bala.sp88@gmail.com", 
            mobile: "+91 7667995558"
        }
    }
}

// <div>
// <p style={{ color: 'white', fontSize: '1rem' }}><span style={deepBlue}>{'class '}</span> <span style={green}>{'Person'}</span>{' {'}</p>
// <p style={{ color: 'white', fontSize: '1rem' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={blue}>{'name'}</span>{': '}<span style={green}>{'String'}</span></p>
//               <p style={{ color: 'white', fontSize: '1rem' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={blue}>{'role'}</span>{': '}<span style={green}>{'String'}</span></p>
//               <p style={{ color: 'white', fontSize: '1rem' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'constructor() {'}</p>
//               <p style={{ color: 'white', fontSize: '1rem' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'this.name = "Bala Subramaniam";'}</p>
//               <p style={{ color: 'white', fontSize: '1rem' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'this.role = "Full Stack Web & Hybrid Mobile App Developer";'}</p>
//               <p style={{ color: 'white', fontSize: '1rem' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</p>
//               <p style={{ color: 'white', fontSize: '1rem' }}>{'}'}</p>
//            </div>