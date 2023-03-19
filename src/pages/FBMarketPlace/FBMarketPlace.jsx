import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import FBIphone from "../../assets/images/fb_iphone.png"
import FBMPlogo from "../../assets/images/facebook_mp.png"
import FBMPuml from "../../assets/images/fbmp_uml.jpg"
import Python from "../../assets/images/python.png"
import Pandas from "../../assets/images/pandas.png"
import NumPy from "../../assets/images/numpy.png"
import PyTorch from "../../assets/images/pytorch.png"
import GitHub from "../../assets/images/github.png"
import Docker from "../../assets/images/docker.png"
import Kubernetes from "../../assets/images/kubernetes.png"
import AWS from "../../assets/images/aws.png"
import FAISS from "../../assets/images/faiss.png"
import FastAPI from "../../assets/images/fastapi.png"
import { FBMPSearchBar } from "../../components";
import "./FBMarketPlace.css";

const FBMarketPlace = () => {
  return (
    <>
    <div id="fb_container">
      <div className="fb_text">
        <div className="title_and_name">
          <div className="title">
          Facebook Marketplace Search Ranking System
          </div>
          <em className="author">
            <div id="author_icon"><FontAwesomeIcon icon={faUser} /></div>Dias F. R.
          </em>
        </div>
        < FBMPSearchBar location={'fb_searchbar_main'} />
      </div>
      <img src={FBIphone} alt="iphone png with facebook logo"></img>
    </div>
    <div id="intro_container">
      <h1 className="fb_h1">Introduction</h1>
      <p className="intro_desc">Facebook Marketplace is a key service hosted by Facebook. It is a destination for people to discover, buy and sell items in their area or worldwide. But how does it work?</p>
      <p className="intro_desc">In this article I will be covering a project I worked on as part of my online course at <a href="https://www.theaicore.com/">AiCore</a>.
                                My project was based around the production of the image model used by Facebook Marketplace to classify and rank products listed by users.
                                To get a general grasp of the overall system that defines the Marketplace, please refer to <a href="https://youtu.be/1Z5V2VrHTTA">this
                                </a> excellent video developed by AiCore x MLOps.community.</p>
      <p className="intro_desc">However, if you're more interested in a quick overview, here is a simple UML diagram describing the process.</p>
      <figure id="uml_container">
        <img className="uml" src={FBMPuml} alt="a uml diagram describing the overall process behind Facebook's Marketplace"></img>
        <figcaption className="uml_caption">Fig 1. A UML diagram outlining the overall Facebook Marketplace system. Please note: Not all the services defined above are the ones directly used by Facebook</figcaption>
      </figure>
      <p className="intro_desc">In essence, image and text data are extracted from databases such as Amazon S3 and Amazon RDS and preprocessed to be fed into their respective models.
                                The data is split into training, testing and validation sets, coupled into random batches and passed into the CNNs for modelling.</p>
      <p className="intro_desc">The image model is a pre-trained ResNet-50 model. This model is a 50-layer deep neural network that does a 1000 way classification on the famous ImageNet dataset.
                                By abstracting away the final fully connected layer and adding an output size that fits the task of classifying the items in the Marketplace, we are able to
                                train the same model on a new task. This is known as transfer learning. Furthermore, the text understanding model is a CNN trained on the text associated with each image.
                                Both models finds meaningful representations of each product in the form of a vector and concatenates this to form the final search index. This is a vector that
                                most closely represents the product.</p>
      <p className="intro_desc">Using these models we are able to create a feature store of the product embeddings. This feature store can be in the form of a json with a key:value pair
                                denoting the images name to their vector embedding.</p>
      <p className="intro_desc">When users input a query into the search field, a seperate text understanding model converts this into a vector. This vector is then used at 2 stages to find
                                the best potential matches. At the retrieval stage, this vector is compared to other vectors within the feature store using FAISS to gather a list of k closest
                                vectors. FAISS does this comparison between vectors by reducing the dimensionality of the vectors and performing the dot product rule. This is why it was
                                reported to be 8.5x faster than the current state of the art. This is then finely filtered at the ranking stage which uses a larger ranking model to find
                                the best possible candidates for a given query.</p>
      <p className="intro_desc">And that in a nutshell is how Facebook Marketplace's Search Ranking System works</p>
      <h1 className="fb_h1">Tools</h1>
      <div className="tools_container">
        <img src={Python} alt="python logo" />
        <img src={Pandas} alt="pandas logo" />
        <img src={NumPy} alt="numpy logo" />
        <img src={PyTorch} alt="pytorch logo" />
        <img src={GitHub} alt="github logo" />
        <img src={Docker} alt="docker logo" />
        <img src={Kubernetes} alt="kubernetes logo" />
        <img src={AWS} alt="aws logo" />
        <img src={FAISS} alt="faiss logo" />
        <img src={FastAPI} alt="fast api logo" />
      </div>
      <p className="intro_desc"></p>
      <h1 className="fb_h1">Multimodal Model</h1>
    </div>
    <div id="fb_model_container">
      <div className="fbmp_copy">
        <div className="fbmp_header">
          <div className="fbmp_title">Facebook</div>
          <div className="fbmp_logo">
            <img src={FBMPlogo} alt="facebook marketplace logo" />
          </div>
          <div className="fbmp_title">MarketPlace</div>
        </div>
        <FBMPSearchBar location={'fb_searchbar_model'} />
        <div className="products_tile">
          Products go here
        </div>
      </div> 
    </div>
    </>
  );
};

export default FBMarketPlace;