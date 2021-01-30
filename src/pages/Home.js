/* eslint-disable jsx-a11y/anchor-is-valid */
import stickMan from "../components/photos/stickMan.jpg"


function Home() {

    const styles = {
        imageProperty: {
            width: "75%"
        },
        imgColor: {
            backgroundColor: "black"
        },
        jumbotron: {
            background: "black",
            color: "white",
            margin: 0
        },
        noPadding: {
            padding: 0
        }

    }


    return (<div className="container-fluid">


        <div className="row">
            <div className="col-12">
                <div className="jumbotron jumbotron-fluid" style={styles.jumbotron}>
                    <div className="container">                     <h1 className="display-4 text-center">Hello!  And.. Welcome</h1>
                        <p className="lead">Thank you for stopping by!  I am a Full-Stack We Developer from New York City who is a team player, professional debugger with a passion to create smooth websites for a fluid user expereince.  </p>
                    </div>
                </div>
            </div>

        </div>

        <div className="row">
            <div className="col-12 text-center" style={styles.noPadding}>
                <img src={stickMan} alt="Stick Figure" style={styles.imageProperty}></img>
            </div>
        </div>




    </div >
    )

}

export default Home;