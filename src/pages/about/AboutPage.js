import React from "react";
import styles from "./AboutPage.module.css";
import SildeShow from "../../components/Sildeshow/Sildeshow";

const AboutPage = () => {
    return (
        <>
            <SildeShow/>
            <div className={styles["about-wrapper"]}>
                <section>
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae deleniti earum, iste labore neque quidem saepe ut. A aperiam aspernatur consequatur deleniti deserunt dicta dolor ea ex, exercitationem facilis fuga harum hic impedit, iste itaque magnam maiores nihil nobis non numquam omnis optio possimus quasi quia quisquam rem repellendus sequi sit sunt temporibus totam unde voluptatem voluptatum? Animi, assumenda cum distinctio dolorum eaque eligendi esse, eveniet fugit, impedit incidunt inventore iure laudantium natus nobis nostrum omnis quam quidem sit sunt tenetur ut veritatis voluptates. Autem dignissimos eos exercitationem id laboriosam recusandae sit? Assumenda molestias officia ut voluptates? Deleniti harum illum in nisi odit quae quidem soluta vel. A autem dolore doloremque hic molestias nihil odit quam quod tempore. Ab accusantium aliquid consequatur cupiditate dignissimos ea earum, esse et, eum explicabo facilis harum illum ipsam laborum natus nemo obcaecati praesentium quaerat quia recusandae reiciendis rem sapiente sequi sunt, tempore temporibus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur culpa cupiditate est, facilis in, ipsum iure labore laborum quasi quisquam sed, vero voluptate. Aliquam animi aut delectus dolorem ducimus ipsum, minima natus officia optio praesentium quas rerum sapiente, tempore. A alias aliquid architecto nam omnis optio saepe vero. Alias amet architecto debitis eveniet facilis ipsa necessitatibus qui totam ullam velit! Dicta earum excepturi explicabo laudantium, magni minima modi molestiae odio possimus quas totam voluptas.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores dolores molestiae voluptatibus. Assumenda, blanditiis corporis doloremque enim est fugit ipsam iure maxime minima nisi odio optio pariatur possimus quisquam sint sit voluptatem. Accusantium cum delectus ea facere magni nesciunt, quidem sapiente velit voluptatem. Corporis dicta error minus odio repellendus sunt? Accusamus aut fuga iure libero nam voluptatum? Accusantium ad aliquam aperiam consequatur cum cupiditate ea, eaque error excepturi hic incidunt inventore modi nostrum praesentium quidem recusandae saepe sed temporibus veritatis voluptas! Eum in maxime neque reprehenderit suscipit? Alias deleniti doloribus dolorum eaque expedita fugiat laboriosam, maxime nam nemo provident quae quaerat saepe sed sint tempora, ut vel. At autem incidunt reprehenderit sint velit! Ab aspernatur at blanditiis consequuntur culpa delectus eius, eum fugiat id impedit laborum libero mollitia nemo non porro quas saepe sed, sint suscipit tempore tenetur vero vitae! Aliquid at blanditiis dolore iste libero, neque officia unde.</p>
                </section>
            </div>
        </>
    )
}

export default AboutPage;