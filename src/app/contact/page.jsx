import ContactCard from "../../components/contactPage/ContactCard";
import PageSchema from "../../components/PageSchema";
function ContactPage() {
    return ( 
        <PageSchema pageId={4} content={(
            <ContactCard/>
        )}/>

     );
}

export default ContactPage;