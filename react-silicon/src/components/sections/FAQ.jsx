import React from "react";

const FAQ = () => {
  return (
    <div className="faqs-container">
      <h3 title="FAQ"></h3>
      <div className="questions-container">
        <div className="content-container">
          <button className="faq-header btn">
            <h4>Is any of my personal information stored in the App?</h4>
            <span
              className=" close active fa fa-sharp fa-solid fa-angle-up
                                 btn icon-background shape-round"
            ></span>
            <span
              className="open fa fa-sharp fa-solid fa-angle-down
                             btn icon-background shape-round"
            ></span>
          </button>
          <div className="content active">
            <p>
              Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
              Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
              adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
              fermentum duis accumsan lectus non. Massa cursus molestie lorem
              scelerisque pellentesque. Nisi, enim, arcu purus gravida
              adipiscing euismod montes, duis egestas. Vehicula eu etiam quam
              tristique tincidunt suspendisse ut consequat.
            </p>

            <p>
              Ornare senectus fusce dignissim ut. Integer consequat in eu
              tortor, faucibus et lacinia posuere. Turpis sit viverra lorem
              suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam
              nunc purus lacus, elit leo elit facilisi. Dignissim amet
              adipiscing massa integer.
            </p>
          </div>
        </div>

        <div className="content-container">
          <button className="faq-header btn faq-btn">
            <h4>What formats can I download my transaction history in?</h4>
            <span
              className=" close fa fa-sharp fa-solid fa-angle-up
                            btn icon-background shape-round"
            ></span>
            <span
              className="open active fa fa-sharp fa-solid fa-angle-down
                        btn icon-background shape-round"
            ></span>
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              natus aliquam et repellendus praesentium. Illum dolorum sequi
              ullam numquam reprehenderit, at, non enim beatae distinctio, iste
              ex nam repudiandae esse commodi quae provident consectetur est id.
              Doloremque asperiores facilis qui neque repellendus sed! Impedit
              perspiciatis quia beatae, eligendi provident reprehenderit.
            </p>
          </div>
        </div>

        <div className="content-container">
          <button className="faq-header btn faq-btn">
            <h4>Can I schedule future transfers?</h4>
            <span
              className=" close fa fa-sharp fa-solid fa-angle-up
                        btn icon-background shape-round"
            ></span>
            <span
              className="open active fa fa-sharp fa-solid fa-angle-down
                        btn icon-background shape-round"
            ></span>
          </button>
          <div className="content">
            <p>
              Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
              Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
              adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
              fermentum duis accumsan lectus non. Massa cursus molestie lorem
              scelerisque pellentesque. Nisi, enim, arcu purus gravida
              adipiscing euismod montes, duis egestas. Vehicula eu etiam quam
              tristique tincidunt suspendisse ut consequat.
            </p>
          </div>
        </div>

        <div className="content-container">
          <button className="faq-header btn faq-btn">
            <h4>When can I use Banking App services?</h4>
            <span
              className=" close fa fa-sharp fa-solid fa-angle-up
                        btn icon-background shape-round"
            ></span>
            <span
              className="open active fa fa-sharp fa-solid fa-angle-down
                        btn icon-background shape-round"
            ></span>
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem iste at doloribus sint sapiente dignissimos
              reprehenderit obcaecati aliquid amet, nobis placeat consequuntur
              quas minima voluptatum voluptate fugiat enim voluptates nesciunt
              mollitia ex sit hic illo consequatur. Eos, culpa consectetur?
              Pariatur aspernatur commodi nulla vitae ullam provident magnam.
            </p>
          </div>
        </div>

        <div className="content-container">
          <button className="faq-header btn faq-btn">
            <h4>
              Can I create my own password that is easy for me to remember?
            </h4>
            <span
              className=" close fa fa-sharp fa-solid fa-angle-up
                        btn icon-background shape-round"
            ></span>
            <span
              className="open active fa fa-sharp fa-solid fa-angle-down
                        btn icon-background shape-round"
            ></span>
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              debitis perferendis aspernatur? Dolor suscipit sequi illo, ab
              voluptatibus inventore commodi animi deleniti quasi nulla
              veritatis.
            </p>
          </div>
        </div>

        <div className="content-container">
          <button className="faq-header btn faq-btn" id="last-header">
            <h4>What happens if I forget or lose my password?</h4>
            <span
              className="close fa fa-sharp fa-solid fa-angle-up
                        btn icon-background shape-round"
            ></span>
            <span
              className="open active fa fa-sharp fa-solid fa-angle-down
                        btn icon-background shape-round"
            ></span>
          </button>
          <div className="content" id="last-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              sapiente unde deserunt doloribus nisi ex iure suscipit vitae,
              consequatur ducimus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              deleniti incidunt quasi laudantium voluptas rem nostrum debitis
              itaque repudiandae aspernatur beatae porro earum, at ab libero
              perspiciatis dolores corrupti reprehenderit rerum veritatis
              consectetur facere temporibus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
