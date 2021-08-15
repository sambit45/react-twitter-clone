import React from 'react'

function LeftLayout() {
    return (
        <div>
            <div class="layout">
            <div class="layout_left">
                <img src="assets/icons8-twitter.svg" class="img_twitter" alt=""/>
                <div class="sidebar_menu">
                    <div class="sidebar_item  sidebar_item--active">
                        <img src="assets/icons8-home.svg" class="item_icon" alt=""/>
                        Home 
                    </div>
                    <div class="sidebar_item">
                        <img src="assets/hashtag-solid-svgrepo-com.svg"class="item_icon" alt=""/>
                        Explore
                    </div>
                    <div class="sidebar_item">
                        <img src="assets/notification-svgrepo-com.svg"class="item_icon" alt=""/>
                        Notifications
                    </div>
                    <div class="sidebar_item">
                        <img src="assets/email-envelope-svgrepo-com.svg"class="item_icon" alt=""/>
                        Messages
                    </div>
                    <div class="sidebar_item">
                        <img src="assets/profile-svgrepo-com.svg"class="item_icon" alt=""/>
                        Profile
                    </div>
                    <div class="sidebar_item">
                        <img src="assets/more-svgrepo-com.svg"class="item_icon" alt=""/>
                        More
                    </div>
                    <div>
                        <button class="button button1">Tweet</button>
                    </div>
                </div>
            </div>
            
            
        </div>
        </div>
    )
}

export default LeftLayout
