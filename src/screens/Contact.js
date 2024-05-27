function Contact() {
    var footer= {
        minHeight: "100vh"
    }
    return ( 
        <>
         <main class="container mt-5 pb-5" style={footer}>
        <h1>Contact Us</h1>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" required/>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required/>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </main>
        </>
     );
}

export default Contact;