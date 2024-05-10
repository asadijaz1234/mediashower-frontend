import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

import {
  NewsletterHeader,
  NewslatterPaper,
  NewsletterForm,
} from "~/components/newsletter";
import { PageSection, PageSectionProps } from "~/components/page-section";
import Link from "next/link";

//Interfaces
export interface SubscriptionNewsletterSectionProps extends PageSectionProps {}

const SectionStyles = styled(PageSection)(({ theme }) => {
  return {
    "& .MuiContainer-root": {
      maxWidth: 1320,
    },
  };
});

//Component
export const SubscriptionNewsletterSection = (
  props: SubscriptionNewsletterSectionProps
) => {
  return (
    <SectionStyles disablePadding {...props}>
      <Container>
        <NewslatterPaper>
          <NewsletterHeader
            title="Which Plan is Right for You?"
            subtitle={
              <>
                We can recommend a plan (even a custom plan!) to meet your
                marketing goals.
                <Link
                  href={"/contact"}
                  style={{
                    color: "white",
                    marginLeft: 5,
                  }}
                >
                  Click here to contact us.
                </Link>
              </>
            }
          />
          {/* <NewsletterForm /> */}
        </NewslatterPaper>
      </Container>
    </SectionStyles>
  );
};
