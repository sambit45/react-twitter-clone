import React from 'react'

function RightLayout() {
    return (
        <div>
            {/* right side */}
            <div class="layout_right_cont">
                <div class="layout_right">
                    <div class="box">
                        <i id="search" class="fa fa-search" aria-hidden="true"></i>
                        <input type="text" name="" placeholder="Search Twitter" class="search"/>
                    </div>
                    <br/>
                <div class="trends_for_you">
                    
                    <div class="trends_for_you_block">
                        <div class="trends_for_you_heading">
                            Trends For you
                            <i id="setting" class="fas fa-cog"></i>
                        </div>
                    </div>
                    <div class="trends_for_you_block">
                        <div class="trends_for_you_meta-info">
                            Trending in Germany 
                        </div>
                        <div class="trends_for_you_trend-name">
                            #iPhone12
                        </div>
                        <div class="trends_for_you_meta-info">
                            155k Tweets
                        </div>
                    </div>
                    <div class="trends_for_you_block">
                        <div class="trends_for_you_meta-info">
                            Trending in Germany 
                        </div>
                        <div class="trends_for_you_trend-name">
                            #AmazonPrimeDay
                        </div>
                    </div>
                    <div class="trends_for_you_block">
                        <div class="trends_for_you_meta-info">
                            Trending - Trending
                        </div>
                        <div class="trends_for_you_trend-name">
                            #autos
                        </div>
                        <div class="trends_for_you_meta-info">
                            2,800 Tweets
                        </div>
                    </div>
                </div>
                <div class="who_to_follow">
                    <div class="who_to_follow_block">
                        <div class="who_to_follow_heading">
                            Who to follow
                        </div>
                    </div>
                    <div class="who_to_follow_block">
                        <img class="who_to_follow_author_logo " src="assets/mark.jpg" alt=""/>
                        <div class="who_to_follow_content">
                            <div>
                                <div class="who_to_follow_author-name">
                                    Mark Zuckerberg
                                </div>
                                <div class="who_to_follow_author-slug">
                                    @markzuckerberg
                                </div>
                            </div>
                            <div class="who_to_follow_button">
                                Follow
                            </div>
                        </div>
                    </div>
                    <div class="who_to_follow_block">
                        <img class="who_to_follow_author_logo" src="assets/salman.jpg" alt=""/>
                        <div class="who_to_follow_content">
                            <div>
                                <div class="who_to_follow_author-name">
                                    Salman Khan
                                </div>
                                <div class="who_to_follow_author-slug">
                                    @salmankhan
                                </div>
                            </div>
                            <div class="who_to_follow_button">
                                Follow
                            </div>
                        </div>
                    </div>
                    <div class="who_to_follow_block">
                        <img class="who_to_follow_author_logo " src="assets/media.jpg" alt=""/>
                        <div class="who_to_follow_content">
                            <div>
                                <div class="who_to_follow_author-name">
                                    Media tek India
                                </div>
                                <div class="who_to_follow_author-slug">
                                    @mediatekindia
                                </div>
                            </div>
                            <div class="who_to_follow_button">
                                Follow
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default RightLayout
