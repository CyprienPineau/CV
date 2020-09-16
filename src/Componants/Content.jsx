import React, {Component} from 'react'
import './Content.css'

import ExperienceList from './ExperienceList'
import SkillsList from './SkillsList'


class Content extends Component {
    render() { 
        const T = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iste eveniet id, vero perspiciatis, debitis architecto omnis numquam, maxime aut excepturi? Aspernatur hic a delectus! Soluta quisquam tenetur ipsum ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit perspiciatis incidunt quibusdam nisi sint reiciendis mollitia sequi temporibus placeat doloribus repellendus nulla ea libero a, rem eaque sapiente rerum! Exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt cupiditate facere culpa, quam expedita nihil nulla, necessitatibus perferendis repellat sunt eos vel? Perferendis, dicta iste quisquam quae nam hic et. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sequi consequatur, quo, sunt maxime delectus repudiandae ex minima nobis aspernatur voluptate odio aliquid distinctio? Nesciunt a at molestiae nemo ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic cum soluta, quia aliquid nemo. Optio ducimus fugit, necessitatibus sunt repellendus voluptatem facilis nesciunt labore, amet libero aut aliquam numquam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus ex, veritatis, eaque facere sed in libero rem pariatur totam nam accusamus cupiditate corrupti doloremque eveniet explicabo. Quasi, laboriosam suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iste eveniet id, vero perspiciatis, debitis architecto omnis numquam, maxime aut excepturi? Aspernatur hic a delectus! Soluta quisquam tenetur ipsum ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit perspiciatis incidunt quibusdam nisi sint reiciendis mollitia sequi temporibus placeat doloribus repellendus nulla ea libero a, rem eaque sapiente rerum! Exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt cupiditate facere culpa, quam expedita nihil nulla, necessitatibus perferendis repellat sunt eos vel? Perferendis, dicta iste quisquam quae nam hic et. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sequi consequatur, quo, sunt maxime delectus repudiandae ex minima nobis aspernatur voluptate odio aliquid distinctio? Nesciunt a at molestiae nemo ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic cum soluta, quia aliquid nemo. Optio ducimus fugit, necessitatibus sunt repellendus voluptatem facilis nesciunt labore, amet libero aut aliquam numquam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus ex, veritatis, eaque facere sed in libero rem pariatur totam nam accusamus cupiditate corrupti doloremque eveniet explicabo. Quasi, laboriosam suscipit.'
        return <div className="content">
            <ExperienceList 
                showSideMenu={this.props.showSideMenu}
                isSideMenuShown = {this.props.isSideMenuShown}
            />
            <SkillsList
                showSideMenu={this.props.showSideMenu}
            />
            <div>
                liens externe
            </div>
            
        </div>
    }
}
 
export default Content;