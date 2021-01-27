import React from "react"
import Container from "@material-ui/core/Container"
import NYC from "../components/NYC"


class Portfolio extends React.Component {






    render() {

        const white = {
            loremTag: {
                color: "white"
            }
        }
        return (<Container>
            <div>
                <p style={white.loremTag}  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestias cupiditate, hic sunt ipsam eius tempora ipsa quo laudantium corporis est, ipsum ullam molestiae eligendi rerum architecto quis. Eum esse consequuntur, inventore quasi vel enim, harum aut laudantium est, labore accusamus consequatur voluptatem? Dolor quibusdam fugit aliquid harum perspiciatis iste, molestiae odit nisi ut unde aspernatur ad deleniti voluptates sequi amet maxime! Fugit eligendi laudantium vitae dicta, dignissimos ab nemo modi fuga numquam. Atque itaque, accusantium ad quo eaque molestias necessitatibus. Molestiae quam quo voluptatibus ratione maxime quas natus hic. Saepe laudantium culpa tempore eum nesciunt asperiores suscipit officia, ut quo explicabo, quae, aperiam quia animi nihil vitae autem quaerat labore. Odio labore maxime, suscipit pariatur eveniet tenetur et ab sint, dolores incidunt velit ea, quis odit laudantium officia nihil nostrum tempore repudiandae expedita distinctio autem nesciunt veritatis iure recusandae. Voluptate, alias similique et amet incidunt mollitia perspiciatis placeat voluptatem sequi optio omnis dignissimos assumenda tempore odio corporis molestiae. Tenetur sit minima optio placeat mollitia veniam voluptate sint, consequatur totam earum aperiam provident eius expedita libero odit explicabo, omnis, officia cumque accusamus nam cum! Dignissimos, mollitia libero neque repellat, nemo assumenda natus minus, quas ad accusamus ratione incidunt tempora exercitationem inventore architecto eos eveniet voluptatem doloribus ullam autem corporis quo veniam nostrum reprehenderit! Incidunt esse commodi ipsam vitae iste in voluptas fugiat quia velit sit accusamus earum ratione facilis ullam tempore corrupti unde dolorum, molestiae saepe distinctio natus suscipit error rerum et. Vitae consequatur sint, qui fugiat ipsa ad sequi officiis culpa recusandae sit quibusdam ex debitis quae, dicta modi error aperiam? Dolores odio magni illum dolorum deserunt, corporis consectetur quas consequuntur corrupti quidem aperiam consequatur perferendis totam quod possimus iure dignissimos quos obcaecati debitis unde similique sunt? Eligendi natus quod nesciunt itaque quos dolor incidunt, eaque at rerum deserunt?
            </p>
            <div>
                <NYC />
                </div>

            </div>
        </Container>

        )
    }
}

export default Portfolio