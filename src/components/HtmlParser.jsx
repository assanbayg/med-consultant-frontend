import PropTypes from "prop-types";
import DOMPurify from "dompurify";

// renders html code in page
// not used in page becuase plotly files are HUGE
// therefore used iframes and firebase storage
// but let's keep this code until i delete this in the next commit

const HtmlParser = ({ htmlContent }) => {
  const sanitizedHtmlContent = DOMPurify.sanitize(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }} />;
};

HtmlParser.propTypes = {
  htmlContent: PropTypes.string.isRequired,
};

export default HtmlParser;
