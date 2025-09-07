# 🖼️ Image Setup Guide - Hanshills & Co. Website

## 🎯 **Quick Setup Steps**

### **Step 1: Create Images Folder**
1. **Create an `images` folder** in the `public` directory
2. **Path**: `public/images/`

### **Step 2: Add Your Images**
1. **Private Equity Image**: Save as `luxury-interior-private-equity.jpg`
2. **Venture Capital Image**: Save as `venture-capital-city-skyline.jpg`
3. **Place both images** in `public/images/`

### **Step 3: Image Specifications**
- **Format**: JPG or WebP
- **Size**: Recommended 800x600px or larger
- **File size**: Under 500KB for optimal performance
- **Aspect ratio**: 4:3 or 16:9 works best

### **Step 4: Verify the Effects**
- **Scroll down** on the homepage
- **Watch both images glide** from left to right
- **See the smooth animations** as you scroll

---

## 🌟 **What You'll See**

### **Private Equity Section**
- **Luxurious interior background** representing high-end services
- **Smooth left-to-right glide** as users scroll
- **Professional overlay** with growth icon
- **Experience counter** (15+ Years Experience)

### **Venture Capital Section**
- **City skyline background** representing innovation and growth
- **Smooth left-to-right glide** as users scroll
- **Professional overlay** with lightning bolt icon
- **Startup counter** (50+ Startups Funded)

### **Glide Animation Effect**
- **Images slide left** as you scroll down
- **Smooth, elegant movement** with scroll progress
- **Overlay elements** also glide in sync
- **Floating stats cards** move with the images

---

## 🔧 **Customization Options**

### **Adjust Glide Speed**
In both visual components, modify this line:
```javascript
transform: `translateX(${scrollProgress * -60}px)`
```
- **Increase number** (e.g., -80) for faster glide
- **Decrease number** (e.g., -40) for slower glide

### **Change Overlay Opacity**
Modify these lines:
```javascript
// Private Equity
<div className="absolute inset-0 bg-black/30"></div>

// Venture Capital  
<div className="absolute inset-0 bg-black/25"></div>
```
- **Increase** (e.g., bg-black/40) for darker overlay
- **Decrease** (e.g., bg-black/20) for lighter overlay

---

## 📱 **Mobile Optimization**

The glide effects are **automatically optimized** for mobile:
- **Smooth performance** on all devices
- **Touch-friendly** scroll interactions
- **Responsive design** that works everywhere

---

## ✅ **Final Result**

After adding your images, you'll have:
- **Private Equity**: Luxurious interior representing premium services
- **Venture Capital**: City skyline representing innovation and growth
- **Smooth glide animations** on both sections
- **Professional overlays** with company branding
- **Elegant animations** that enhance user experience
- **Perfect representation** of your integrated services

---

## 🎨 **Image Recommendations**

### **Private Equity Image**
- **Theme**: Luxury, sophistication, professionalism
- **Content**: High-end interiors, boardrooms, executive spaces
- **Mood**: Trust, stability, long-term value

### **Venture Capital Image**
- **Theme**: Innovation, growth, urban development
- **Content**: City skylines, modern architecture, technology
- **Mood**: Energy, ambition, future-focused

---

*Your website will now showcase both Private Equity and Venture Capital sections with sophisticated, animated visuals that perfectly represent Hanshills & Co.'s premium services and strategic approach to value creation.*
