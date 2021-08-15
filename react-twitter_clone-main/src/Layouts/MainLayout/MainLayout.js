import React,{Component} from 'react'
    
  

class MainLayout extends React.Component {
        


        handle(event){
            this.setState({
                data:event.target.value
            
            })
            
            
        }
        handlecomment(event){
            this.setState({
                data:event.target.value
            })
            
        }
        constructor(props) {
          super(props);
          this.state = {
            likes:0,
            likes1:1000,
            likes2:2500,
            likes3:100,
            likes4:200,
            likes5:600,
            likes6:3000,
            data:'',
            aftercomment:'',
            com:0,
            com1:0,
            com2:0,
            com3:0,
            com4:0,
            com5:0,
            com6:0,
            value: 'random text'
            
          };
        }
  
      
        IncrementItem = () => {
              this.setState({
                  likes: this.state.likes + 1 ,
              });
        }
        IncrementItem1 = () => {
              this.setState({
                  likes1: this.state.likes1 + 1 ,
              });
        }
        IncrementItem2 = () => {
              this.setState({
                  likes2: this.state.likes2 + 1 ,
                  });
        }
        IncrementItem3 = () => {
              this.setState({
                  likes3: this.state.likes3 + 1 ,
                  });
        }
        IncrementItem4 = () => {
              this.setState({
                  likes4: this.state.likes4 + 1 ,
                });
        }
        IncrementItem5 = () => {
              this.setState({
                  likes5: this.state.likes5 + 1 ,
                });
        }
        IncrementItem6 = () => {
              this.setState({
                  likes6: this.state.likes6 + 1 
              });
        }
        Incrementcom = () => {
              this.setState({
                  com: this.state.com + 1 
              });
        }
        Incrementcom1 = () => {
              this.setState({
                  com1: this.state.com1 + 1 
              });
        }
        Incrementcom2 = () => {
              this.setState({
                  com2: this.state.com2 + 1 
              });
        }
        Incrementcom3 = () => {
              this.setState({
                  com3: this.state.com3 + 1 
              });
        }
        Incrementcom4 = () => {
              this.setState({
                  com4: this.state.com4 + 1 
              });
        }
        Incrementcom5 = () => {
              this.setState({
                  com5: this.state.com5 + 1 
              });
        }
        Incrementcom6 = () => {
              this.setState({
                  com6: this.state.com6 + 1 
              });
        }
        

        


    render() {
        return (
        <div>
            <div class="layout_main">
               {/*  <!--content-menu--> */}
            <div class="feed">
                {/* <!-- tweetbox--> */}
                <div class="HOME">Home</div>
            
                <>
                <hr/>
                <div class="wrapper">
                    <div class="input-box">
                      <div class="tweet-area">
                        <img src="assets/tweet_box_logo.jpg" class="tweetbox_logo" alt=""/>
                        <textarea  placeholder="What's happening?" onChange={this.handle.bind(this)}></textarea>
                        
                      </div>
                      <div class="privacy">
                        <img src="assets/world-globe-asia-view-svgrepo-com.svg" class="globe" alt=""/>
                        <div class="Everyone">Everyone can reply</div>
                      </div>
                    </div>
                    <div class="bottom">
                      <ul class="icons">
                        <li><img src="assets/capture-svgrepo-com.svg" class="logo" alt=""/></li>
                        <li><img src="assets/file-image-svgrepo-com.svg" class="logo" alt=""/></li>
                        <li><img src="assets/location-svgrepo-com.svg" class="logo" alt=""/></li>
                        <li><img src="assets/smile-svgrepo-com.svg" class="logo" alt=""/></li>
                        <li><img src="assets/profile-svgrepo-com.svg" class="logo" alt=""/></li>
                      </ul>
                      
                      <div>
                        <button class="button button1"  >Tweet</button>
                      </div>
                      
                    </div>
                </div>
                </>
                
            </div>

           {/*  <!-- Tweets main --> */}
            <br/>
                
                {/* <!-- Tweet --> */}
                <div class="tweet">
                    <img src="assets/profile.jpeg" class="tweet_logo" alt=""/>
                    <div class="tweet_main">
                        <div class="tweet_header">
                            <div class="tweet_author">
                                Shekhar Adwani
                            </div>
                            <div class="tweet_author_id">
                                @shekharadwani
                            </div>
                            <div class="tweet_time">
                                38min
                            </div>
                        </div>
                        <div class="tweet_content">
                            Thank You for the great opportunity @Sushma
                            <img class="tweet_img" src="assets/thank-you.jpg" alt=""/><br/><br/><br/>
                        </div>
                        <div class="btns1">
                            
                            <i id="one" class="fas fa-heart" onClick={this.IncrementItem3}>{this.state.likes3}</i>
                            <i class="fas fa-comment">{this.state.com1}</i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-share-alt"></i>
                       
                        </div>
                        <form>
                        <input type="text" class="inputcomment"  placeholder="add a comment"  onChange={this.handlecomment.bind(this)}/>
                        <button class="btn_comment" type="reset" onClick={this.Incrementcom1}>Comment</button>
                        </form>
                    </div>
                </div>
               {/*  <!-- Tweet --> */}
                <div class="tweet">
                    <img src="assets/profile2.webp" class="tweet_logo" alt=""/>
                    <div class="tweet_main">
                        <div class="tweet_header">
                            <div class="tweet_author">
                                Ishwa Jain
                            </div>
                            <div class="tweet_author_id">
                                @ishwajain
                            </div>
                            <div class="tweet_time">
                                19h
                            </div>
                        </div>
                        <div class="tweet_content">
                            <div class="main_content">COVID-19 cases linked to the Tokyo Games approach 300<br/></div>
                            There have been at least 299 cases of COVID-19 linked to the Tokyo Games, 
                            according to IOC data. In the latest batch, there are 18 new cases linked to the Games,
                            including an artistic swimmer from Greece. The country's Olympic Committee has pulled 
                            the team out of the competition. It comes as cases in Tokyo are rising, with 
                            only the most serious patients being taken to hospital.
                            <img class="tweet_img" src="assets/corona.jpeg" alt=""/><br/><br/><br/>
                        </div>
                        <div class="btns1">
                            
                            <i id="one" class="fas fa-heart" onClick={this.IncrementItem1}>{this.state.likes1}</i>
                            <i class="fas fa-comment">{this.state.com2}</i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-share-alt"></i>
                       
                        </div>
                        <form>
                        <input type="text" class="inputcomment"  placeholder="add a comment"  onChange={this.handlecomment.bind(this)}/>
                        <button class="btn_comment" type="reset" onClick={this.Incrementcom2}>Comment</button>
                        </form>
                    </div>
                </div>

                {/* <!-- Tweet --> */}
                <div class="tweet">
                    <img src="assets/profile.jpeg" class="tweet_logo" alt=""/>
                    <div class="tweet_main">
                        <div class="tweet_header">
                            <div class="tweet_author">
                                Shekhar Adwani
                            </div>
                            <div class="tweet_author_id">
                                @shekharadwani
                            </div>
                            <div class="tweet_time">
                                21hr
                            </div>
                        </div>
                        <div class="tweet_content">
                            Here are some of the javascript course link that may be helpful for you .
                            <a href="https://www.w3schools.com/js/">https://www.w3schools.com/js/</a><br/>
                            <a href="https://www.coursera.org/learn/javascript">https://www.coursera.org/learn/javascript</a><br/>
                            <a href="https://www.udemy.com/course/the-complete-javascript-course/">
                                https://www.udemy.com/course/the-complete-javascript-course/</a><br/><br/><br/>
                        </div>
                        <div class="btns1">
                            <i id="one" class="fas fa-heart" onClick={this.IncrementItem2}>{this.state.likes2}</i>
                            <i class="fas fa-comment">{this.state.com3}</i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-share-alt"></i>
                        </div>
                        <form>
                        <input type="text" class="inputcomment"  placeholder="add a comment"  onChange={this.handlecomment.bind(this)}/>
                        <button class="btn_comment" type="reset" onClick={this.Incrementcom3}>Comment</button>
                        </form>
                    </div>
                </div>

                {/* <!-- Tweet --> */}
                <div class="tweet">
                    <img src="assets/user3.jpg" class="tweet_logo" alt=""/>
                    <div class="tweet_main">
                        <div class="tweet_header">
                            <div class="tweet_author">
                                Akash Kansal
                            </div>
                            <div class="tweet_author_id">
                                @akashkansal
                            </div>
                            <div class="tweet_time">
                                Yesterday
                            </div>
                        </div>
                        <div class="tweet_content">
                            <div class="main_content">A black hole warped space-time so much that 
                            astronomers saw flashes of light from its far side</div>
                            Astronomers have seen light from behind a black hole for the first time.
                             The black hole warped light from X-ray explosions on its far side, bending 
                             the light around toward Eat.<br/>
                             It further confirms Albert Einstein's theory that massive objects 
                             like black holes warp space-time.<br/><br/><br/>
                        </div>
                        <div class="btns1">
                            <i id="one" class="fas fa-heart" onClick={this.IncrementItem6}>{this.state.likes6}</i>
                            <i class="fas fa-comment">{this.state.com4}</i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-share-alt"></i>
                        </div>
                        <form>
                        <input type="text" class="inputcomment"  placeholder="add a comment"  onChange={this.handlecomment.bind(this)}/>
                        <button class="btn_comment" type="reset" onClick={this.Incrementcom4}>Comment</button>
                        </form>
                    </div>
                </div>

                {/* <!-- Tweet--> */}
                <div class="tweet">
                    <img src="assets/user4.png" class="tweet_logo" alt=""/>
                    <div class="tweet_main">
                        <div class="tweet_header">
                            <div class="tweet_author">
                                Sanskriti Kapoor
                            </div>
                            <div class="tweet_author_id">
                                @sanskritikapoor
                            </div>
                            <div class="tweet_time">
                               Yesterday
                            </div>
                        </div>
                        <div class="tweet_content">
                            Congratulations <i class="fas fa-glass-cheers"></i><br/><br/><br/>
                        </div>
                        <div class="btns1">
                            <i id="one" class="fas fa-heart" onClick={this.IncrementItem4}>{this.state.likes4}</i>
                            <i class="fas fa-comment">{this.state.com5}</i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-share-alt"></i>
                        </div>
                        <form>
                        <input type="text" class="inputcomment"  placeholder="add a comment"  onChange={this.handlecomment.bind(this)}/>
                        <button class="btn_comment" type="reset" onClick={this.Incrementcom5}>Comment</button>
                        </form>
                    </div>
                </div>

                {/* <!-- Tweet--> */}
                <div class="tweet">
                    <img src="assets/profile2.webp" class="tweet_logo" alt=""/>
                    <div class="tweet_main">
                        <div class="tweet_header">
                            <div class="tweet_author">
                                Akansha Singh
                            </div>
                            <div class="tweet_author_id">
                                @akanshasingh
                            </div>
                            <div class="tweet_time">
                                2 day
                            </div>
                        </div>
                        <div class="tweet_content">
                            Excited for the Olympics<br/><br/><br/>
                        </div>
                        <div class="btns1">
                            <i id="one" class="fas fa-heart" onClick={this.IncrementItem5}>{this.state.likes5}</i>
                            <i class="fas fa-comment">{this.state.com6}</i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-share-alt"></i>
                        </div>
                        <form>
                        <input type="text" class="inputcomment"  placeholder="add a comment"  onChange={this.handlecomment.bind(this)}/>
                        <button class="btn_comment" type="reset" onClick={this.Incrementcom6}>Comment</button>
                        </form>
                    </div>
                </div>
             </div>
        </div>
    );
}

    }
export default MainLayout
