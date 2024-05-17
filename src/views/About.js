import '../styles/about.css'; // Import the CSS file

/**
 * Renders the About component with information on how Pomovision works.
 *
 * @return {JSX.Element} The rendered React component for the About page.
 */
const About = () => {
  return (
    <div className="About">
      <h1>How Pomovision Works</h1>
      <ol>
        <li><strong>Setup Your Queue:</strong> Before you start your Pomodoro sessions, create a queue of videos you'd like to watch. These can be anything that helps you relax and unwind, such as motivational clips, educational videos, or light entertainment.</li>
        <li><strong>Work Intervals:</strong> Just like the traditional Pomodoro Technique, work for a set interval (e.g., 25 minutes).</li>
        <li><strong>Rest with Videos:</strong> During your 5-minute short breaks and 15-30 minute long breaks, watch the videos from your queue. This integration makes your rest periods more engaging and can help you reset mentally and emotionally.</li>
        <li><strong>Repeat:</strong> Continue the cycle of work and video-enhanced breaks throughout your day.</li>
    </ol>
    </div>
  );
};

export default About;